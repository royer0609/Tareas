import mongoose from "mongoose";

export const connecDB = async() => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/tareas");
        console.log('DB is Connected');
    } catch (error) {
        console.log(error);
    }
}