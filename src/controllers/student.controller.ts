import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as studentService from "../services/student.service";

router.get("/", get);
router.get("/:id", getById);
router.get("/:id/applied", applied);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);
router.get("/:id1/jobs/:id2", getJob);

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

function applied(req: Request, res: Response, next: NextFunction) {
  studentService
    ._applied(Number(req.params.id))
    .then((jobs) => {
      res.json(jobs);
    })
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
    .then((student) =>
      res.json(
        res.json(
          res.json({
            ...omitPassword(student),
          })
        )
      )
    )
    .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction) {
  studentService
    ._delete(Number(req.params.id))
    .then((student) => res.json(student))
    .catch(next);
}

function getJob(req: Request, res: Response, next: NextFunction) {
  studentService
    .getJobs(Number(req.params.id1), Number(req.params.id2))
    .then((jobs) => res.json(jobs))
    .catch(next);
}

function omitPassword(user: any) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export default router;
