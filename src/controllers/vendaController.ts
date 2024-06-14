import { Body, Post, Route } from "tsoa"
import { UsuarioModel } from "../models/Usuario"
import { VendaModel } from "../models/Venda"

@Route("api/venda")
export default class VendaController {
  @Post("/create")
  public async create(@Body() body: {marca: string, modelo: string, ano: string, km: number, combustivel: string,
    detalhes: string, valor: number}): Promise<any> {
    const venda = new VendaModel({
      marca: body.marca,
      modelo: body.modelo,
      ano: body.ano,
      km: body.km,
      combustivel: body.combustivel,
      detalhes: body.detalhes,
      valor: body.valor
    })
    try {
      await venda.save()
      return { result: "OK" }
    } catch (error) {
      return { result: error }
    }
  }
}
