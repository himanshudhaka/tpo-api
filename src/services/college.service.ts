import prisma from "../db";
import { College } from "@prisma/client";

export async function get() {
  return await prisma.college.findMany();
}

export async function getById(id: number) {
  return await prisma.college.findUnique({ where: { id } });
}

export async function create(college: College) {
  return await prisma.college.create({
    data: college,
  });
}

export async function update(college: College, id: number) {
  return await prisma.college.update({
    where: { id },
    data: college,
  });
}

export async function _delete(id: number) {
  return await prisma.college.delete({ where: { id } });
}
