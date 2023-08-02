import mongoose from "mongoose";
import 'dotenv/config';

const uri = process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/rolling-bites';

mongoose.connect(uri);

const datosConexion = mongoose.connection;

datosConexion.once('open', () => {
  console.log("BD conectada")
})