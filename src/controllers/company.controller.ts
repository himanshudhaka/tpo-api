import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as companyService from "../services/company.service";

router.get("/", get);
router.get("/:id", getById);
router.get("/:id/applicants", getApplicants);
router.post("/:id/status", setStatus);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);
router.get("/:id/jobs", getJobs);

function get(req: Request, res: Response, next: NextFunction) {
  companyService
    .get()
    .then((companies) => res.json(companies))
    .catch(next);
}

function getById(req: Request, res: Response, next: NextFunction) {
  companyService
    .getById(Number(req.params.id))
    .then((company) => res.json(company))
    .catch(next);
}

function getApplicants(req: Request, res: Response, next: NextFunction) {
  companyService
    ._getApplicants(Number(req.params.id))
    .then((jobs) => {
      res.json(jobs);
    })
    .catch(next);
}

function setStatus(req: Request, res: Response, next: NextFunction) {
  companyService
    ._setStatus(Number(req.params.id), req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

function create(req: Request, res: Response, next: NextFunction) {
  companyService
    .create(req.body)
    .then((company) => res.json(company))
    .catch(next);
}

function update(req: Request, res: Response, next: NextFunction) {
  companyService
    .update(req.body, Number(req.params.id))
    .then((company) =>
      res.json(
        res.json({
          ...omitPassword(company),
        })
      )
    )
    .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction) {
  companyService
    ._delete(Number(req.params.id))
    .then((company) => res.json(company))
    .catch(next);
}

function getJobs(req: Request, res: Response, next: NextFunction) {
  companyService
    .getJobs(Number(req.params.id))
    .then((jobs) => res.json(jobs))
    .catch(next);
}

function omitPassword(user: any) {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export default router;
