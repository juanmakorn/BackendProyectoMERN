import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {
  borrarProducto,
  crearProducto,
  obtenerProducto,
 } from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").post(validarProducto, crearProducto);

router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto);
  
export default router;
