import express from 'express';

const userRoute = express.Router();

userRoute.get('/', (req, res) => {
    res.send('User route get request is working !');
})

userRoute.post('/', (req, res) => {
    res.send(`Data received: ${JSON.stringify(req.body)}`);
})

export default userRoute;