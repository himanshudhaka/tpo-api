import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as studentService from "../services/student.service";

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);

function get(req: Request, res: Response, next: NextFunction) {
  studentService
    .get()
    .then((students) => res.json(students))
    .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction) {
  studentService
    .getById(Number(req.params.id))
    .then((student) => res.json(student))
    .catch(next);
}

function create(req: Request, res: Response, next: NextFunction) {
  studentService
    .create(req.body)
    .then((student) => res.json(student))
    .catch(next);
}

function update(req: Request, res: Response, next: NextFunction) {
  studentService
    .update(req.body, Number(req.params.id))
    .then((student) => res.json(student))
    .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction) {
  studentService
    ._delete(Number(req.params.id))
    .then((student) => res.json(student))
    .catch(next);
}

export default router;
