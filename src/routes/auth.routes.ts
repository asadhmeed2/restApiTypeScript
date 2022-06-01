import express from 'express';
import { createUserHandler } from '../controller/user.controller';
import { validateResource } from '../middleware/validateResourse';
import { createSessionSchema } from '../schema/auth.schema';

const router = express.Router();

router.get('/auth',(_,res)=> res.status(200).json({
    message: "auth is working"

}));

router.post('/api/session',validateResource(createSessionSchema), createUserHandler);


export default router;