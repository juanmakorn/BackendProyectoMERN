import Pedido from "../models/pedido";

export const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    await nuevoPedido.save();
    res.status(201).json({
      mensaje: "Se creó el pedido.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar crear el pedido",
    });
  }
};

export const borrarPedido = async (req, res) => {
  try {
    const pedidoABorrar = await Pedido.findById(req.params.id);
    if (!pedidoABorrar) {
      return res.status(404).json({
        mensaje: "El pedido que querés borrar no fue encontrado.",
      });
    }
    await Pedido.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Eliminaste el pedido",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No pudimos eliminar el pedido.",
    });
  }
};

export const editarEstadoPedido = async (req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "El estado del pedido fue actualizado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se pudo actualizar el estado del pedido",
        });
    }
};

export const obtenerListaPedidos = async (req, res) => {
    try {
        const listaPedidos = await Pedido.find();
        res.status(200).json(listaPedidos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener los pedidos",
        });
    }
};