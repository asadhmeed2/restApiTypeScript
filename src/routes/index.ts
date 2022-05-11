import express from 'express';

const router = express.Router();

router.get('/healthcheck',(_,res)=> res.status(200).json({}));

export default router;