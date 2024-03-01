import winston from "winston";
import dotenv from "dotenv";
import path from "path";

import { __dirname } from "../utils.js"

dotenv.config();

const customLevels = {
    levels:{
        fatal:0,
        error:1,
        warn:2,
        info:3
    },
    colors :{
        fatal:"red",
        error:"orange",
        warn:"yelow",
        info:"blue"
    },
};

const devLogger = winston.createLogger({
    levels:customLevels.levels,
    transport: [
        new winston.transports.Console({level: "info"})
    ]
});

const prodLogger = winston.createLogger({
    levels:customLevels.levels,
    transports:[
        new winston.transports.Console({level: "http"}),
        new winston.transports.File({filename: path.join(__dirname, "/logs/errores.log"),level: "warn"}, )
    ]
});

const currentEnv = process.env.NODE_ENV || "development";

export const addLogger = (req, res, next) => {
    if(currentEnv === "development"){
        req.looger = devLogger;
    } else {
        req.looger = prodLogger;
    }
    req.logger.info(`${req.url} - method: ${req.method}`)
    next();
};    
