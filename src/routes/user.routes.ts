import express from 'express';
import { createUserHandler, forgotPasswordHandler, resetPasswordHandeler, verifyUserHandler } from '../controller/user.controller';
import { validateResource } from '../middleware/validateResourse';
import { createUserSchema, forgotPasswordSchema, resetPasswordSchema, verifyUserSchema } from '../schema/user.schema';

const router = express.Router();

router.get('/user',(_,res)=> res.status(200).json({
    message: "user is working"
}));

router.post('/api/users',validateResource(createUserSchema), createUserHandler)

router.post('/api/users/verify/:id/:verificationCode',validateResource(verifyUserSchema),verifyUserHandler)


router.post('/api/users/forgotpassword' , validateResource(forgotPasswordSchema),forgotPasswordHandler);


router.post('/api/users/resetpassword/:id/:passwordResetCode',validateResource(resetPasswordSchema),resetPasswordHandeler);



export default router;