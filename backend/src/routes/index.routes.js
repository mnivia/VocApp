import { Router } from "express";
import {pool} from "../db.js"
import {index} from "../controllers/index.controller.js"

const router = Router()

router.get("/ping",index)

export default router;