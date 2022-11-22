import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import * as companyService from "../services/company.service";

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", _delete);

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

function create(req: Request, res: Response, next: NextFunction) {
  companyService
    .create(req.body)
    .then((company) => res.json(company))
    .catch(next);
}

function update(req: Request, res: Response, next: NextFunction) {
  companyService
    .update(req.body, Number(req.params.id))
    .then((company) => res.json(company))
    .catch(next);
}

function _delete(req: Request, res: Response, next: NextFunction) {
  companyService
    ._delete(Number(req.params.id))
    .then((company) => res.json(company))
    .catch(next);
}

export default router;
