import Pedido from "../models/pedido"
export const crearPedido = async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json
    } catch (error) {
        
    }
}