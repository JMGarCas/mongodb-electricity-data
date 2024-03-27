import mongoose from "mongoose";

const EnergySchema = new Schema({
  entity: String,
  year: Number,
  accessElectricity: Number,
  cleanFuels: Number,
  renewableCapacity: Number,
  financialFlows: Number,
  renewableEnergyShare: Number,
  fossilElectricity: Number,
  nuclearElectricity: Number,
  renewablesElectricity: Number,
  lowCarbonElectricity: Number,
  primaryEnergyConsumption: Number,
  energyIntensity: Number,
  co2Emissions: Number,
  renewableEnergyPercent: Number,
  gdpGrowth: Number,
  gdpPerCapita: Number,
  density: Number,
  landArea: Number,
  latitude: Number,
  longitude: Number
});

const Energy = mongoose.model("Energy", EnergySchema);

export default Energy;
