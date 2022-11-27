import express from "express";
import userController from "../controllers/github/userController.js"

const router = express.Router()

router.get("/user/:username/repositories/", userController.getRepositories)

export default router