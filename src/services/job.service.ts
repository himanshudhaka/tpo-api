import prisma from "../db";
import { Job } from "@prisma/client";
import { Applied } from "@prisma/client";
export async function get() {
  return await prisma.job.findMany({
    include: {
      company: {
        include: {
          jobs: true,
        },
      },
    },
  });
}

export async function getById(id: number) {
  return await prisma.job.findUnique({ where: { id } });
}

export async function create(Job: Job) {
  return await prisma.job.create({
    data: {
      post: Job.post,
      description: Job.description,
      salary: Job.salary,
      grade: Job.grade,
      twelthGrade: Job.twelthGrade,
      tenthGrade: Job.tenthGrade,
      process: Job.process,
      companyId: Number(Job.companyId),
      collegeId: Number(Job.collegeId),
    },
  });
}

export async function update(job: Job, id: number) {
  return await prisma.job.update({
    where: { id },
    data: job,
  });
}

export async function _delete(id: number) {
  return await prisma.job.delete({ where: { id } });
}

export async function _applicants(applicant: Applied) {
  return await prisma.applied.create({
    data: applicant,
  });
}
