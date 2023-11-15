import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { createAccesToken } from '../libs/jwt.js';
import { token } from 'morgan';

export const register = async (req, res) => {
    const {email, password, username} = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
    
        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });


    } catch (error) {
        console.log(error);
    }
    
};

export const login = (req, res) => res.send("login");