import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import { crearProducto, editarProducto } from "../controllers/productos.controllers";

const router = Router();

router.route("/").post(validarProducto, crearProducto)
router.route("/productos/:id").put(editarProducto);


export default router;
