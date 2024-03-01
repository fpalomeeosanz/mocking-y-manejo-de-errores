import mongoose from "mongoose";

export const dbConecction = async () => {
    try {
        await mongoose.connect("mongodb+srv://fpalomerosanz:fpalomerosanz@cluster0.xx4eski.mongodb.net/e-commerce");
        console.log('Conectado a la BDD :D');
    } catch (error) {
        console.log(`Hubo un error al tratar de conectar a la BD el error: ${error}`);
    }
};