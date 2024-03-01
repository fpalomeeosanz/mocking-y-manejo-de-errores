import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

export const options = {
    server: {
        port: 8080
    },
    mongo: {
        url: MONGO_URI
    },
};