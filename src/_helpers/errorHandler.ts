import { Request, Response, NextFunction } from "express";

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }
  if (err.name === "Unauthorized error") {
    return res.status(401).json({ message: "Invalid Token" });
  }
  return res.status(500).json({ message: err.message });
}

export default errorHandler;
