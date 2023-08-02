import { Router } from "express";
import {
  borrarPedido,
  crearPedido,
  editarEstadoPedido,
  obtenerListaPedidos
} from "../controllers/pedidos.controllers";
import validarEstadoPedido from "../helpers/validarEstadoPedido";

const router = Router();

router.route("/pedidos").post(crearPedido).get(obtenerListaPedidos)
router
  .route("/pedidos/:id")
  .delete(borrarPedido)
  .patch(validarEstadoPedido, editarEstadoPedido);

export default router;
