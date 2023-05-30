import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as collegeService from "../services/college.service";

router.get("/", get);
router.get("/:id", getById);
router.get("/:id/jobs", getJobs);
router.get("/:id/students", getStudents);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);

function get(req: Request, res: Response, next: NextFunction) {
  collegeService
    .get()
    .then((colleges) => res.json(colleges))
    .catch(next);
}

function getStudents(req: Request, res: Response, next: NextFunction) {
  collegeService
    .getStudent(Number(req.params.id))
    .then((college) => res.json(college))
    .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction) {
  collegeService
    .getById(Number(req.params.id))
    .then((college) => res.json(college))
    .catch(next);
}

function create(req: Request, res: Response, next: NextFunction) {
  collegeService
    .create(req.body)
    .then((college) => res.json(college))
    .catch(next);
}

function update(req: Request, res: Response, next: NextFunction) {
  collegeService
    .update(req.body, Number(req.params.id))
    .then((college) =>
      res.json(
        res.json(
          res.json({
            ...omitPassword(college),
          })
        )
      )
    )
    .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction) {
  collegeService
    ._delete(Number(req.params.id))
    .then((college) => res.json(college))
    .catch(next);
}

function getJobs(req: Request, res: Response, next: NextFunction) {
  collegeService
    ._getJobs(Number(req.params.id))
    .then((jobs) => {
      res.json(jobs);
    })
    .catch(next);
}

function omitPassword(user: any) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export default router;
