import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        minLenght: 2,
        maxLenght: 100,
    },
    estado: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 1,
        max: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    },
    detalle: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 250,
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto;
