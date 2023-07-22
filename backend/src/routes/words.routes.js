import { Router } from "express";
import { getWords,getWord,createWords,updateWords,deleteWords } from "../controllers/words.controllers.js";

const router = Router()

router.get("/words", getWords)

router.get("/words/:id", getWord)

router.post("/words",createWords)

router.patch("/words/:id",updateWords)

router.delete("/words/:id",deleteWords)

export default router