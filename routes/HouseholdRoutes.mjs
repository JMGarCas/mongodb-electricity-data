import Router from "express";
import {
  getHouseholds,
  deleteHousehold, createHousehold,
    updateHousehold
} from "../controllers/HouseholdController.mjs";

const router = Router();

router.get("/households", getHouseholds);
router.delete("/households/:id", deleteHousehold);
router.post("/households/create", createHousehold);
router.put("/households/update/:id", updateHousehold);

export default router;
