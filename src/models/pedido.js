import mongoose, {Schema} from "mongoose";

const pedidoSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  productos: [
    {
      id: {
        type: String,
        required: true,
      },
      producto: {
        type: String,
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
    },
  ],
  estado: {
    type: String,
    enum: ["Pendiente", "Entregado", "Cancelado"],
    default: "Pendiente",
  },
  total: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;