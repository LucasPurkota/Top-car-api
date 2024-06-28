import { Body, Delete, Patch, Post, Get, Route } from "tsoa"
import { UsuarioModel } from "../models/Usuario"
import { VendaModel } from "../models/Venda"

@Route("api/venda")
export default class VendaController {
  @Post("/create")
  public async create(@Body() body: {marca: string, modelo: string, ano: string, km: number, combustivel: string,
    detalhes: string, valor: number, cidade:string, vendedor: string}): Promise<any> {
    const venda = new VendaModel({
      marca: body.marca,
      modelo: body.modelo,
      ano: body.ano,
      km: body.km,
      combustivel: body.combustivel,
      detalhes: body.detalhes,
      valor: body.valor,
      cidade: body.cidade,
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
    detalhes: string, valor: number, cidade:string, vendedor: string }): Promise<any> {
     try {
      const result = await VendaModel.findByIdAndUpdate(body.id, { 
        marca: body.marca,
        modelo: body.modelo,
        ano: body.ano,
        km: body.km,
        combustivel: body.combustivel,
        detalhes: body.detalhes,
        valor: body.valor,
        cidade: body.cidade,
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

  @Get("/getAll")
  public async getAll(): Promise<any> {
    try {
      const data = await VendaModel.find()
      return data
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }

  @Post("/getSaleUser")
  public async getSaleUser(@Body() venda: {vendedor: string}): Promise<any> {
    try {
      const data = await VendaModel.find({vendedor: venda.vendedor})
      return data
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }
}
