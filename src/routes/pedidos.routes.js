import { Router} from "express";
import { borrarPedido, crearPedido } from "../controllers/pedidos.controllers";

const router = Router();

router.route('/pedidos').post(crearPedido);
router.route('/pedidos/:id').delete(borrarPedido);

export default router;