import Router from "express";
import {
  getHouseholds,
  deleteHousehold, createHousehold
} from "../controllers/HouseholdController.mjs";

const router = Router();

router.get("/households", getHouseholds);
router.delete("/households/:id", deleteHousehold);
router.post("/households/create", createHousehold);

export default router;
