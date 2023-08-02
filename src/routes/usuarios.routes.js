import { Router } from "express";
import { obtenerListaUsuarios, obtenerUsuario } from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerListaUsuarios)
router.route("/usuarios/:id").get(obtenerUsuario);


export default router;
