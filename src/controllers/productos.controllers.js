import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const obtenerListaProductos = async (req, res) => {
  try {
    const usuarios = await Producto.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener los productos",
    });
  }
};

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

export const borrarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue borrado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se borro el producto",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar obtener el producto",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El producto fue actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo actualizar el producto",
    });
  }
};

export const editarEstadoProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El estado del producto fue actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo actualizar el estado del producto",
    });
  }
};
