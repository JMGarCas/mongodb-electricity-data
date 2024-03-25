import Router from "express";
import {
  getEnergies,
  getEnergy,
  deleteAllEnergies,
  deleteEnergy,
  createEnergy,
  updateEnergy,
  getEnergiesByCountry,
} from "../controllers/EnergyController.mjs";

const router = Router();

router.get("/energies", getEnergies);
router.get("/energies/:id", getEnergy);
router.delete("/energies", deleteAllEnergies);
router.delete("/energies/:id", deleteEnergy);
router.post("/energies/", createEnergy);
router.put("/energies/:id", updateEnergy);
router.get("/energies/country/:country", getEnergiesByCountry);

export default router;
