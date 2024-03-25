import Router from "express";
import {
  getHouseholds,
  deleteAllHouseholds,
  deleteHousehold,
} from "../controllers/HouseholdController.mjs";

const router = Router();

router.get("/households", getHouseholds);
router.delete("/households", deleteAllHouseholds);
router.delete("/households/:id", deleteHousehold);

export default router;
