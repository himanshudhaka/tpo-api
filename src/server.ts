import express from "express";
import cors from "cors";
import companyController from "./controllers/company.controller";
import jobsController from "./controllers/job.controller";
import collegeController from "./controllers/college.controller";
import studentController from "./controllers/student.controller";
import authController from "./controllers/auth.controller";
import errorHandler from "./_helpers/errorHandler";
import jwt from "./_helpers/jwt";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/companies", companyController);
app.use("/jobs", jobsController);
app.use("/colleges", collegeController);
app.use("/student", studentController);
// app.use(jwt());
app.use("/", authController);
// app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Example app listening on port`);
});
