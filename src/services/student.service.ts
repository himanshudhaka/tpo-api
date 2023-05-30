import prisma from "../db";
import { Student } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function get() {
  return await prisma.student.findMany();
}

export async function getById(id: number) {
  return await prisma.student.findUnique({ where: { id } });
}

export async function _applied(id: number) {
  return await prisma.applied.findMany({
    where: {
      studentId: id,
    },
    include: {
      // company: true,
      job: {
        include: {
          company: true,
        },
      },
    },
  });
}

export async function getJobs(id: number, ID: number) {
  return await prisma.job.findMany({
    where: { collegeId: id, applicants: { none: { studentId: ID } } },
    include: {
      company: true,
    },
  });
}

export async function create(student: Student) {
  student.password = bcrypt.hashSync(student.password, 10);
  return await prisma.student.create({
    data: student,
    // {
    //   rollNo: student.rollNo,
    //   email: student.email,
    //   password: student.password,
    //   firstName: student.firstName,
    //   lastName: student.lastName,
    //   clgAcademics: student.clgAcademics,
    //   twelveGrade: student.twelveGrade,
    //   tenthGrade: student.tenthGrade,
    //   branch: student.branch,
    //   approved: student.approved,
    //   collegeId: Number(student.collegeId),
    //   phone: student.phone,
    // },
  });
}

export async function update(student: Student, id: number) {
  if (student.password)
    student.password = bcrypt.hashSync(student.password, 10);

  return await prisma.student.update({
    where: { id },
    data: student,
  });
}

export async function _delete(id: number) {
  return await prisma.student.delete({ where: { id } });
}
