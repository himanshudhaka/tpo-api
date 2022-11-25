import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as authService from "../services/auth.service";
import jwt from "jsonwebtoken";
import { Student, College, Company } from "@prisma/client";
import * as collegeService from "../services/college.service";
import * as studentService from "../services/student.service";
import * as companyService from "../services/company.service";

router.post("/login", authenticate);
router.post("/signup", signUp);

function authenticate(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  authService
    .authenticate("company", email, password)
    .then((user) => res.json(user))
    .catch(next);
}

function signUp(req: Request, res: Response, next: NextFunction) {
  let type = "company";
  if (type === "company") {
    companyService
      .create(req.body)
      .then((user) => {
        const token = jwt.sign({ sub: user.id }, process.env.SECRET ?? "", {
          expiresIn: "7d",
        });
        return {
          ...omitPassword(user),
          token,
        };
      })
      .catch(next);
  } else if (type === "college") {
    collegeService
      .create(req.body)
      .then((user) => {
        const token = jwt.sign({ sub: user.id }, process.env.SECRET ?? "", {
          expiresIn: "7d",
        });
        return {
          ...omitPassword(user),
          token,
        };
      })
      .catch(next);
  } else {
    studentService
      .create(req.body)
      .then((user) => {
        const token = jwt.sign({ sub: user.id }, process.env.SECRET ?? "", {
          expiresIn: "7d",
        });
        return {
          ...omitPassword(user),
          token,
        };
      })
      .catch(next);
  }
}

function omitPassword(user: any) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export default router;
