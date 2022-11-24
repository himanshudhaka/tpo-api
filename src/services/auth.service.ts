// import { College, Company, Student } from "@prisma/client";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import prisma from "../db";
import jwt from "jsonwebtoken";
// import SECRET from "dotenv";
// import { Student } from "@prisma/client";

// export async function authenticate({ email   , password}){
//     const user =
// }

// export async function authenticateCollege({email , password}) {
//     // const user = await prisma.college.findUnique({
//     //     where :{
//     //         email  : email,
//     //         password : password
//     //     }
//     // })
// }

export async function authenticate(
  type: string,
  email: string,
  password: string
) {
  type = "company";
  let user;
  if (type === "company")
    user = await prisma.company.findUnique({ where: { email } });
  else if (type === "college")
    user = await prisma.college.findUnique({ where: { email } });
  else user = await prisma.student.findUnique({ where: { email } });

  if (!user) throw "User is not registered";

  if (password == user.password) {
    const token = jwt.sign({ sub: user.id }, process.env.SECRET ?? "", {
      expiresIn: "7d",
    });
    return {
      ...omitPassword(user),
      token,
    };
  }
}

function omitPassword(user: any) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

// export async function authenticateStudent(student: Student) {}
