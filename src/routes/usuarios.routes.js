import { Router } from "express";
import { check } from "express-validator";
import { obtenerListaUsuarios, obtenerUsuario ,login,register, borrarUsuario, editarEstadoUsuario} from "../controllers/usuarios.controllers";
import ValidarEstadoUsuario from "../helpers/validarEstadoUsuario";

const router = Router();

router.route("/usuarios").get(obtenerListaUsuarios)
router.route("/usuarios/:id").get(obtenerUsuario).delete(borrarUsuario).patch(ValidarEstadoUsuario, editarEstadoUsuario);

router.route("/usuarios/login").post(login);

router.route("/usuarios/register").post(  [
    check("nombreUsuario").notEmpty().withMessage("El nombre es obligatorio"),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 8 caracteres")
      .isLength({
        min: 8,
        max: 16,
      })
      .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      .withMessage(
        "El password debe contener entre 8 y 16 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero)"
      ),
  ],
  register
  )

export default router;
