import { Router } from "express";
import { check } from "express-validator";
import { obtenerListaUsuarios, obtenerUsuario ,login,register, borrarUsuario} from "../controllers/usuarios.controllers";

const router = Router();

router.route("/usuarios").get(obtenerListaUsuarios)
router.route("/usuarios/:id").get(obtenerUsuario).delete(borrarUsuario);

router.route("/login").post(login);

router.route("/register").post(  [
    check("nombreUsuario").notEmpty().withMessage("El nombre es obligatorio"),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres")
      .isLength({
        min: 6,
        max: 15,
      })
      .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      .withMessage(
        "El password debe contener entre 8 y 16 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero)"
      ),
  ],
  register
  )

export default router;
