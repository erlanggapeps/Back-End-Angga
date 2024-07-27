import { Router }from 'express'
import { createUser, getUserId, getUsers } from '../controllers/user.controller'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id',getUserId)
userRouter.post('/', createUser)
userRouter.post('/', createUser)

export { userRouter }