import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarEstadoProducto = [
    check("estado")
        .notEmpty()
        .withMessage("El estado es obligatorio")
        .isIn(["Activo", "De baja"]),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default validarEstadoProducto;
