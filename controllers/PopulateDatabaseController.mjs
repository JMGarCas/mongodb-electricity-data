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
    .pipe(csv())
    .on("data", async (row) => {
      const energy = new Energy({
        Entity: row.Entity,
        Year: row.Year,
        Access_to_electricity_percent_of_population: row.Access_to_electricity_percent_of_population,
        Access_to_clean_fuels_for_cooking: row.Access_to_clean_fuels_for_cooking,
        Renewable_electricity_generating_capacity_per_capita: row.Renewable_electricity_generating_capacity_per_capita,
        Financial_flows_to_developing_countries_US_dollars: row.Financial_flows_to_developing_countries_US_dollars,
        Renewable_energy_share_in_the_total_final_energy_consumption_percent: row.Renewable_energy_share_in_the_total_final_energy_consumption_percent,
        Electricity_from_fossil_fuels_TWh: row.Electricity_from_fossil_fuels_TWh,
        Electricity_from_nuclear_TWh: row.Electricity_from_nuclear_TWh,
        Electricity_from_renewables_TWh: row.Electricity_from_renewables_TWh,
        Low_carbon_electricity_percent_electricity: row.Low_carbon_electricity_percent_electricity,
        Primary_energy_consumption_per_capita_kWh_person: row.Primary_energy_consumption_per_capita_kWh_person,
        Energy_intensity_level_of_primary_energy_MJ_2017_PPP_GDP: row.Energy_intensity_level_of_primary_energy_MJ_2017_PPP_GDP,
        Value_co2_emissions_kt_by_country: row.Value_co2_emissions_kt_by_country,
        Renewables_percent_equivalent_primary_energy: row.Renewables_percent_equivalent_primary_energy,
        gdp_growth: row.gdp_growth,
        gdp_per_capita: row.gdp_per_capita,
        Density_P_Km2: row.Density_P_Km2,
        Land_Area_Km2: row.Land_Area_Km2,
        Latitude: row.Latitude,
        Longitude: row.Longitude,
      });
      await energy.save();
    })
    .on("end", () => {
      res.redirect("/");
    });
});
