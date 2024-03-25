import Router from "express";
import {
  getEnergies,
  getEnergy,
  deleteAllEnergies,
  deleteEnergy,
  createEnergy,
} from "../controllers/EnergyController.mjs";

const router = Router();

router.get("/energies", getEnergies);
router.get("/energies/:id", getEnergy);
router.delete("/energies", deleteAllEnergies);
router.delete("/energies/:id", deleteEnergy);
router.post("/energies/create", createEnergy);

export default router;
