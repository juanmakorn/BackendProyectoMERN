import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import path from "path";
import "./src/database/dbConnection";
import productosRouter from "./src/routes/productos.routes";
import usuariosRouter from "./src/routes/usuarios.routes";
import pedidosRouter from "./src/routes/pedidos.routes";

dotenv.config();

console.log("hola funciona el backend");

const app = express();
app.set("PORT", process.env.PORT || 4000); // PUERTO PROVISORIO de trabajo

app.listen(app.get("PORT"), () => {
  console.log("puerto de trabajo   " + app.get("PORT"));
});
console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")));
// express.raw()
// express.Router()
// express.static()
// express.text()
// express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

//rutes
app.use("/rolling-bites", productosRouter);
app.use("/rolling-bites/auth", usuariosRouter);

app.use('/rolling-bites', pedidosRouter);