import Pedido from "../models/pedido"

export const crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar crear el pedido'
        });
    }
}