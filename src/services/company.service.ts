import prisma from "../db";
import { Company } from "@prisma/client";

export async function get() {
  return await prisma.company.findMany({
    include: {
      jobs: true,
    },
  });
}

export async function getById(id: number) {
  return await prisma.company.findUnique({ where: { id } });
}

export async function create(company: Company) {
  return await prisma.company.create({
    data: company,
  });
}

export async function update(company: Company, id: number) {
  return await prisma.company.update({
    where: { id },
    data: company,
  });
}

export async function _delete(id: number) {
  return await prisma.company.delete({ where: { id } });
}
