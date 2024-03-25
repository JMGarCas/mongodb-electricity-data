import Router from "express";
import {
  getHouseholds,
  deleteHousehold,
} from "../controllers/HouseholdController.mjs";

const router = Router();

router.get("/households", getHouseholds);
router.delete("/households/:id", deleteHousehold);

export default router;
