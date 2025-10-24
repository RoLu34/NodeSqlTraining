import express from 'express';

import { getAllUsers, getOneUser, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/', (req, res) => getAllUsers(req, res))

userRoute.get('/:id', (req, res) => getOneUser(req, res))

userRoute.post('/', (req, res) => createUser(req, res))

userRoute.put('/:id', (req, res) => updateUser(req, res))

userRoute.delete('/:id', (req, res) => deleteUser(req, res))

export default userRoute;