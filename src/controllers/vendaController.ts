import { Body, Delete, Patch, Post, Route } from "tsoa"
import { UsuarioModel } from "../models/Usuario"
import { VendaModel } from "../models/venda"

@Route("api/venda")
export default class VendaController {
  @Post("/create")
  public async create(@Body() body: {marca: string, modelo: string, ano: string, km: number, combustivel: string,
    detalhes: string, valor: number, vendedor: string}): Promise<any> {
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
      return { result: "OK" }
    } catch (error) {
      return { result: error }
    }
  }

  @Patch("/update")
  public async update(@Body() body: { id: string, marca: string, modelo: string, ano: string, km: number, combustivel: string,
    detalhes: string, valor: number, vendedor: string }): Promise<any> {
     try {
      const result = await VendaModel.findByIdAndUpdate(body.id, { 
        marca: body.marca,
        modelo: body.modelo,
        ano: body.ano,
        km: body.km,
        combustivel: body.combustivel,
        detalhes: body.detalhes,
        valor: body.valor,
        vendedor: body.vendedor
    })
      return { result: result }
    } catch (error: any) {
      return {error: error.message,} 
    }
  }


  @Delete("/delete/:id")
  public async delete(id: string): Promise<any> {
    try {
      const venda = await VendaModel.findByIdAndDelete(id)
      return { venda: venda }
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }
}
