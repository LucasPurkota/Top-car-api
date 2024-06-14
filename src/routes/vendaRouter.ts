import express, { Request, Response } from "express"
import { VendaModel } from "../models/venda"
import VendaController from "../controllers/vendaController"

const router = express.Router()
const controller = new VendaController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.create(req.body)

  return res.status(response.result === "OK" ? 200 : 400).send(response)
})