import express, { Request, Response } from "express"
import UsuarioController from "../controllers/UsuarioController"

const router = express.Router()
const controller = new UsuarioController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.create(req.body)

  return res.status(response.result === "OK" ? 200 : 400).send(response)
})

router.patch("/update", async (req: Request, res: Response) => {
  const response = await controller.update(req.body)

  return res.status(response.error ? 400 : 200).send(response)
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const response = await controller.delete(req.params.id)

  return res.status(response.error ? 400 : 200).send(response)
})

router.post("/getEmail", async (req: Request, res: Response) => {
  const response = await controller.getEmail(req.body)

  return res.status(response.error ? 400 : 200).send(response)
})

export default router