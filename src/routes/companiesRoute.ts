// import prisma from '../db'
import express, { Request , Response, NextFunction } from 'express'
const router = express.Router()
import   getAll , { getbyid , create , update , _delete}  from '../controllers/companiesController'

router.get('/', getAllof)

router.get('/:id', getbyIdof)

router.post('/', createOf)

router.put('/',updation)

router.delete('/:id',deletion)

function getAllof(req: Request,res: Response,next: NextFunction){
    // console.log(req.params)
    getAll().then(users=> res.json(users)).catch(next);
}

function getbyIdof(req: Request,res: Response,next: NextFunction){
    getbyid(parseInt(req.params.id)).then(user => res.json(user)).catch(next)
}

function createOf(req: Request,res: Response,next: NextFunction){
    create(req).then(()=>res.json({message: 'User Created'})).catch(next)
}

function updation(req: Request,res: Response,next: NextFunction){
    update(req).then(()=>res.json({message: 'user updated'})).catch(next)
}

function deletion(req: Request,res: Response,next: NextFunction){
    _delete(parseInt(req.params.id)).then(()=>{res.json({message: 'user deleted'})}).catch(next)
}

export default router