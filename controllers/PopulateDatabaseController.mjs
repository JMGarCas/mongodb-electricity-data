import Router from "express";
import fs from "fs";
import csv from "csv-parser";
import Energy from "../database/Energy.mjs";

const router = Router();

export default router.get("/populate-database", async (req, res) => {
  let energies = await Energy.find({});

  if (energies.length > 0) {
    return res.status(400).send("Database already populated");
  }
  fs.createReadStream("./static/global-data-on-sustainable-energy.csv")
    .pipe(csv({
      mapHeaders: ({ header }) => header.trim().replace(/[^a-z0-9]/gi, '_').toLowerCase(),
      mapValues: ({ value }) => value.replace(/,/g, '.')
  }))
    .on("data", async (row) => {
      const energy = new Energy({
        entity: row.entity,
        year: row.year,
        accessElectricity: row.access_to_electricity____of_population_,
        cleanFuels: row.access_to_clean_fuels_for_cooking,
        renewableCapacity: row.renewable_electricity_generating_capacity_per_capita,
        financialFlows: row.financial_flows_to_developing_countries__us___,
        renewableEnergyShare: row.renewable_energy_share_in_the_total_final_energy_consumption____,
        fossilElectricity: row.electricity_from_fossil_fuels__twh_,
        nuclearElectricity: row.electricity_from_nuclear__twh_,
        renewablesElectricity: row.electricity_from_renewables__twh_,
        lowCarbonElectricity: row.low_carbon_electricity____electricity_,
        primaryEnergyConsumption: row.primary_energy_consumption_per_capita__kwh_person_,
        energyIntensity: row.energy_intensity_level_of_primary_energy__mj__2017_ppp_gdp_,
        co2Emissions: row.value_co2_emissions_kt_by_country,
        renewableEnergyPercent: row.renewables____equivalent_primary_energy_,
        gdpGrowth: row.gdp_growth,
        gdpPerCapita: row.gdp_per_capita,
        density: row.density_n_p_km2_,
        landArea: row.land_area_km2_,
        latitude: row.latitude,
        longitude: row.longitude,
      });
      await energy.save();
    })
    .on("end", () => {
      res.redirect("/");
    });
});
