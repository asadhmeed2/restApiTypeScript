import express from 'express';
import { createUserHandler } from '../controller/user.controller';
import { validateResource } from '../middleware/validateResourse';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.get('/user',(_,res)=> res.status(200).json({
    message: "user is working"
}));

router.post('/api/users',validateResource(createUserSchema), createUserHandler)

export default router;