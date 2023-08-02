import { Router } from "express";
import validarProducto from "../helpers/validarProducto";
import {
  borrarProducto,
  crearProducto,
  obtenerProducto,
  editarProducto,
  obtenerListaProductos,
  editarEstadoProducto
 } from "../controllers/productos.controllers";
import validarEstadoProducto from "../helpers/validarEstadoProducto";

const router = Router();

router.route("/productos").get(obtenerListaProductos).post(validarProducto, crearProducto);
router.route("/productos/:id").get(obtenerProducto).delete(borrarProducto).put(validarProducto, editarProducto).patch(validarEstadoProducto,editarEstadoProducto);
  
export default router;
