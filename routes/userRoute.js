import express from 'express';

import { getAllUsers, getOneUser, createUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/', (req, res) => {

    getAllUsers(req, res);
})

userRoute.get('/:id', (req, res) => {
    getOneUser(req, res);
})

userRoute.post('/', (req, res) => {
    createUser(req, res);
})

export default userRoute;