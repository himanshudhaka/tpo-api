import * as dotenv from "dotenv";
dotenv.config();
import prisma from "../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function authenticate(
  type: string,
  email: string,
  password: string
) {
  let user;
  if (type === "company")
    user = await prisma.company.findUnique({ where: { email } });
  else if (type === "college")
    user = await prisma.college.findUnique({ where: { email } });
  else user = await prisma.student.findUnique({ where: { email } });

  if (!user) throw "User is not registered";

  const checkPassword = await bcrypt.compare(password, user.password);

  if (checkPassword) {
    const token = jwt.sign({ sub: user.id }, process.env.SECRET ?? "", {
      expiresIn: "7d",
    });
    return {
      ...omitPassword(user),
      token,
      type,
    };
  }
  throw "Password is not correct";
}

// async function signup(type: string, used: any) {
//   let user;
//   if (type === "company") {
//     user = .create(used);
//   } else if (type === "college") {
//     user = collegeService.create(used);
//   } else {
//     user = studentService.create(used);
//   }
//   const token = jwt.sign({ sub: user.id }, process.env.SECRET ?? "", {
//     expiresIn: "7d",
//   });
//   return {
//     ...omitPassword(user),
//     token,
//   };
// }

function omitPassword(user: any) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

// export async function authenticateStudent(student: Student) {}
