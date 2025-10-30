import User from "../models/userModel.js";
import { isUsernameValid, isEmailValid, isPasswordValid } from "../middleware/validations/userValidation.js";
import { userError, commonErrors } from "../middleware/errorMessage.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: commonErrors.DATABASE_UNAVAILABLE });
    }
}

export const getOneUser = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: userError.USER_NOT_FOUND });
        }   
    } catch (error) {
        res.status(500).json({ message: commonErrors.DATABASE_UNAVAILABLE });
    }
}

export const createUser = async (req, res) => {

    if(!isUsernameValid(req.body.username)){
        return res.status(400).json({ message: userError.INVALID_USERNAME_FORMAT });
    }

    if(!isEmailValid(req.body.email)){
        return res.status(400).json({ message: userError.INVALID_EMAIL_FORMAT });
    }

    if(!isPasswordValid(req.body.password)){
        return res.status(400).json({ message: userError.INVALID_PASSWORD_FORMAT });
    }

    try{
        await User.create(req.body);
        res.status(201);
    } catch (error) {
        res.status(500).json({ message: commonErrors.DATABASE_UNAVAILABLE });
    }
}

export const updateUser = async (req, res) => {

    if(!isUsernameValid(req.body.username)){
        return res.status(400).json({ message: userError.INVALID_USERNAME_FORMAT });
    }

    if(!isEmailValid(req.body.email)){
        return res.status(400).json({ message: userError.INVALID_EMAIL_FORMAT });
    }

    if(!isPasswordValid(req.body.password)){
        return res.status(400).json({ message: userError.INVALID_PASSWORD_FORMAT });
    }

    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.update(req.body);
            res.status(200);
        } else{
            res.status(404).json({ message: userError.USER_NOT_FOUND });
        }
    } catch (error) {
        res.status(500).json({ message: commonErrors.DATABASE_UNAVAILABLE });
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.destroy();
            res.status(200);
        } else{
            res.status(404).json({ message: userError.USER_NOT_FOUND });
        }
    } catch (error) {
        res.status(500).json({ message: commonErrors.DATABASE_UNAVAILABLE });
    }
}