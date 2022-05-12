import express from 'express';

const router = express.Router();

router.get('/auth',(_,res)=> res.status(200).json({
    message: "auth is working"

}));

export default router;