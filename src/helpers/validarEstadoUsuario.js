import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const ValidarEstadoUsuario = [
    check("estado")
        .notEmpty()
        .withMessage("El estado es obligatorio")
        .isIn(["Activo", "Suspendido"]),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default ValidarEstadoUsuario;
