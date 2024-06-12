import { Body, Delete, Get, Patch, Post, Route } from "tsoa"
// import { JsonObject } from "swagger-ui-express"
import { UsuarioModel } from "../models/Usuario"

@Route("api/usuario")
export default class UsuarioController {
  @Post("/create")
  public async create(@Body() body: { cpf: string, nome: string, email: string, celular: string, 
    dataNascimento: Date, cidade: string, senha: string }): Promise<any> {
    const usuario = new UsuarioModel({
      cpf: body.cpf,
      nome: body.nome,
      email: body.email,
      celular: body.celular,
      dataNascimento: body.dataNascimento,
      cidade: body.cidade,
      senha: body.senha,
    })
    try {
      await usuario.save()
      return {result: "OK"}
    } catch (error) {
      return {result: error}
    }
  }

  @Patch("/update")
  public async update(@Body() body: { id: string, cpf: string, nome: string, email: string, celular: string, 
    dataNascimento: Date, cidade: string, senha: string }): Promise<any> {
     try {
      const result = await UsuarioModel.findByIdAndUpdate(body.id, { 
      cpf: body.cpf,
      nome: body.nome, 
      email: body.email,
      celular: body.celular,
      dataNascimento: body.dataNascimento,
      cidade: body.cidade,
      senha: body.senha,
    })
      return { result: result }
    } catch (error: any) {
      return {error: error.message,} 
    }
  }

  @Get("/getUserId")
  public async getId(): Promise<any> {
    try {
      const data = await UsuarioModel.find().select("cpf")

      return data
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }


  @Delete("/delete/:id")
  public async delete(id: string): Promise<any> {
    try {
      const usuario = await UsuarioModel.findByIdAndDelete(id)
      return { usuario: usuario }
    } catch (error: any) {
      return {
        error: error.message,
      }
    }
  }
}