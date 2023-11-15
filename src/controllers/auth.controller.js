import User from '../models/user.model.js';

export const register = (req, res) => {
    const {email, password, username} = req.body

    const newUser = new username({
        username,
        email,
        password
    });
    console.log(newUser);
}

export const login = (req, res) => res.send("login");