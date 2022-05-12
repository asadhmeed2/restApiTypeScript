import express from 'express';

const router = express.Router();

router.get('/user',(_,res)=> res.status(200).json({
    message: "user is working"
}));

router.post('/api/users', (req, res)=> res.status(200).json({
    data:req.body
}))

export default router;