import { Int32 } from "mongodb";
import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: {
    require: true,
    type: Number
  },
  cpf: {
    require: true,
    type: String
  },
  nome: {
    require: true,
    type: String
  },
  email: {
    require: true,
    type: String
  },
  celular: {
    require: true,
    type: String
  },
  dataNascimento: {
    require: true,
    type: Date
  },
  cidade: {
    require: true,
    type: String
  },
  senha: {
    require: true,
    type: String
  }
})

export const UsuarioModel = mongoose.model("Usuario", usuarioSchema)