import express, { Request, Response } from "express"
import UsuarioController from "../controllers/UsuarioController"

const router = express.Router()
const controller = new UsuarioController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.create(req.body)

  return res.status(200).send(response)
})

export default router