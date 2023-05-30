import prisma from "../db";
import { Company } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function get() {
  return await prisma.company.findMany({
    include: {
      jobs: true,
    },
  });
}

export async function getById(id: number) {
  return await prisma.company.findUnique({
    where: { id },
    include: {
      jobs: true,
    },
  });
}

export async function _getApplicants(id: number) {
  return await prisma.applied.findMany({
    where: { jobId: id },
    include: {
      student: true,
    },
  });
}

export async function _setStatus(id: number, body: any) {
  return await prisma.applied.update({
    where: { id },
    data: {
      status: body.status,
    },
  });
}

export async function create(company: Company) {
  company.password = bcrypt.hashSync(company.password, 10);
  return await prisma.company.create({
    data: company,
  });
}

export async function update(company: Company, id: number) {
  if (company.password) {
    company.password = bcrypt.hashSync(company.password, 10);
  }
  return await prisma.company.update({
    where: { id },
    data: company,
  });
}

export async function _delete(id: number) {
  return await prisma.company.delete({ where: { id } });
}

export async function getJobs(id: number) {
  return await prisma.job.findMany({
    where: { companyId: id },
    include: {
      college: true,
    },
  });
}
