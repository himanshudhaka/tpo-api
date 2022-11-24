import prisma from "../db";
import { Student } from "@prisma/client";

export async function get() {
  return await prisma.student.findMany();
}

export async function getById(id: number) {
  return await prisma.student.findUnique({ where: { id } });
}

export async function create(student: Student) {
  return await prisma.student.create({
    data: {
      rollNo: student.rollNo,
      email: student.email,
      password: student.password,
      firstName: student.firstName,
      lastName: student.lastName,
      academics: student.academics,
      branch: student.branch,
      approved: student.approved,
      collegeId: Number(student.collegeId),
      phone: student.phone,
    },
  });
}

export async function update(student: Student, id: number) {
  return await prisma.student.update({
    where: { id },
    data: {
      rollNo: student.rollNo,
      email: student.email,
      password: student.password,
      firstName: student.firstName,
      lastName: student.lastName,
      academics: student.academics,
      branch: student.branch,
      approved: student.approved,
      collegeId: Number(student.collegeId),
      phone: student.phone,
    },
  });
}

export async function _delete(id: number) {
  return await prisma.student.delete({ where: { id } });
}
