import { Body, Delete, Get, Patch, Post, Route } from "tsoa"
import { UsuarioModel } from "../models/Usuario"
import { VendaModel } from "../models/venda"

@Route("api/venda")
export default class VendaController {
  @Post("/create")
  public async create(@Body() body: {marca: String, modelo: String, ano: String, km: Number, combustivel: String, 
    detalhes: String, valor: Number, vendedor: typeof UsuarioModel}): Promise<any> {
        const venda = new VendaModel({
            marca: body.marca, 
            modelo: body.modelo, 
            ano: body.ano, 
            km: body.km, 
            combustivel: body.combustivel, 
            detalhes: body.detalhes, 
            valor: body.valor, 
            vendedor: body.vendedor
        })
        try {
            await venda.save()
            return {result: "OK"}
        } catch (error) {
            return {result: error}
        }
    }
}
