import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { usersRouter } from "./routes/user.route.js";
import { options } from "./config/config.js";
import { dbConecction } from "./config/dbConection.js";
//import { addLogger } from "./helpers/logger.js";
import { generateProducts } from "./helpers/mockingModule.js";
import { mongoose } from "mongoose"

const app = express();

const PORT = options.server.port;

dbConecction();

const httpServer = app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`));

app.use(express.json());

//app.use(addLogger);

app.get("/", (req, res) => {
    req.logger.warn();("Error")
    res.send("Hola Hola")
})

//prueba crear producto con handlerrror
app.post("/products", async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, category, stock } = req.body;
 
        const product = new mongoose.Product({
            title,
            description,
            price,
            thumbnail,
            code,
            category,
            stock,
        });

        await product.save();

        
        res.status(201).json({ message: "Producto creado correctamente", product });
    } catch (error) {
        const customError = handleError(error.code);
        res.status(customError.code).json({ error: customError.message });
    }
});

app.use("/mockingproducts", generateProducts);
app.use("/api/users", usersRouter);
app.use(errorHandler);