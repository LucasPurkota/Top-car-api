import mongoose from "mongoose"
import { UsuarioModel } from "./Usuario"
 
const vendaSchema = new mongoose.Schema({
  id: {
    require: true,
    type: String
  },
  marca: {
    require: true,
    type: String
  },
  modelo: {
    require: true,
    type: String
  },
  ano: {
    require: true,
    type: String
  },
  km: {
    require: true,
    type: Number
  },
  combustivel: {
    require: true,
    type: String
  },
  detalhes: {
    require: true,
    type: String
  },
  valor: {
    require: true,
    type: Number
  }
  // vendedor: {
  //   type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
  // }
})
 
export const VendaModel = mongoose.model("Venda", vendaSchema)