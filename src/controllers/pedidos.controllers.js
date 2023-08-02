import Pedido from "../models/pedido"

export const crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json({
            mensaje: 'Se creó el pedido.'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar crear el pedido'
        });
    }
}