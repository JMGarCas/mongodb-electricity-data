import Router from "express";
import {
  getHouseholds,
  deleteAllHouseholds,
  deleteHousehold,
  createHousehold,
} from "../controllers/HouseholdController.mjs";

const router = Router();

router.get("/households", getHouseholds);
router.delete("/households", deleteAllHouseholds);
router.delete("/households/:id", deleteHousehold);
router.post("/households/create", createHousehold);

export default router;
