import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
});

const Producto = mongoose.model('producto', productoSchema)

export default Producto;
