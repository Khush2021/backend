import express from "express";
import { onboard } from "../controllers/customer.controller.js";

const router = express.Router();

router.route("/onboard").post(onboard);

export default router;
