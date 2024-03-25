import Router from "express";
import {
  getHouseholds,
  getHousehold,
  deleteAllHouseholds,
  deleteHousehold,
  createHousehold,
} from "../controllers/HouseholdController.mjs";

const router = Router();

router.get("/households", getHouseholds);
router.get("/households/:id", getHousehold);
router.delete("/households", deleteAllHouseholds);
router.delete("/households/:id", deleteHousehold);
router.post("/households/create", createHousehold);

export default router;
