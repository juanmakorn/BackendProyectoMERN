import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import { crearProducto } from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").post(validarProducto, crearProducto)


export default router;
