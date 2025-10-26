import { isUsernameValid, isEmailValid, isPasswordValid } from "../middleware/validations/userValidation.js";
import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users." });
    }
}

export const getOneUser = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found." });
        }   
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve user." });
    }
}

export const createUser = async (req, res) => {

    if(!isUsernameValid(req.body.username)){
        return res.status(400).json({ error: "Invalid username format." });
    }

    if(!isEmailValid(req.body.email)){
        return res.status(400).json({ error: "Invalid email format." });
    }

    if(!isPasswordValid(req.body.password)){
        return res.status(400).json({ error: "Invalid password format" });
    }

    try{
        await User.create(req.body);
        res.status(201).json({ message: "User created successfully." });
    } catch (error) {
        res.status(500).json({ error: "Failed to create user." });
    }
}

export const updateUser = async (req, res) => {

    if(!isUsernameValid(req.body.username)){
        return res.status(400).json({ error: "Invalid username format." });
    }

    if(!isEmailValid(req.body.email)){
        return res.status(400).json({ error: "Invalid email format." });
    }

    if(!isPasswordValid(req.body.password)){
        return res.status(400).json({ error: "Invalid password format" });
    }

    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.update(req.body);
            res.status(200).json({ message: "User updated"});
        } else{
            res.status(404).json({ error: "User not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update user." });
    }
}

export const deleteUser = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.destroy();
            res.status(200).json({ message: "User deleted"});
        } else{
            res.status(404).json({ error: "User not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user." });
    }
}