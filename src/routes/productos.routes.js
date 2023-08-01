import { Router } from "express";

const router = Router();

export const crearProducto = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }

        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "El producto fue creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear un producto",
        });
    }
};

export default router;
