import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as jobService from "../services/job.service";

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);
router.post("/apply", applicants);

function get(req: Request, res: Response, next: NextFunction) {
  jobService
    .get()
    .then((jobs) => res.json(jobs))
    .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction) {
  jobService
    .getById(Number(req.params.id))
    .then((job) => res.json(job))
    .catch(next);
}

function create(req: Request, res: Response, next: NextFunction) {
  jobService
    .create(req.body)
    .then((job) => res.json(job))
    .catch(next);
}

function update(req: Request, res: Response, next: NextFunction) {
  jobService
    .update(req.body, Number(req.params.id))
    .then((job) => res.json(job))
    .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction) {
  jobService
    ._delete(Number(req.params.id))
    .then((job) => res.json(job))
    .catch(next);
}

function applicants(req: Request, res: Response, next: NextFunction) {
  jobService
    ._applicants(req.body)
    .then((applicant) => {
      res.json(applicant);
    })
    .catch(next);
}

export default router;
