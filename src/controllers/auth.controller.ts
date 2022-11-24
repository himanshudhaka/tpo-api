import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as authService from "../services/auth.service";

router.post("/login", authenticate);

function authenticate(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  authService
    .authenticate("company", email, password)
    .then((user) => res.json(user))
    .catch(next);
}

export default router;
