import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarEstadoPedido = [
    check("estado")
        .notEmpty()
        .withMessage("El estado es obligatorio")
        .isIn(["Pendiente", "Entregado", "Cancelado"]),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default validarEstadoPedido;