// import { resolve } from 'path';
import prisma from '../db'
import { Request } from 'express'

// export = {
//     default : getAll,
//     getbyid
// }

export default async function getAll(){
    return await prisma.companies.findMany();
}

export async function getbyid(num: number)  {
    return await prisma.companies.findUnique({
        where: {
            id: num
        }
    })
}

export async function create(req:Request) {
    return await prisma.companies.create({
        data: {
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        }
    });
}

export async function update(req: Request){
    return await prisma.companies.update({
        where : {
            id : req.body.id
        },
        data: {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone
        }
    })
}

export async function _delete(num: number){
    return await prisma.companies.delete({
        where:{
            id: num
        }
    })
}