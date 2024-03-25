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
      console.log(row);
      const energy = new Energy({
        entity: row.entity,
        year: row.year,
        access_to_electricity_percent_of_population: row.access_to_electricity____of_population_,
        access_to_clean_fuels_for_cooking: row.access_to_clean_fuels_for_cooking,
        renewable_electricity_generating_capacity_per_capita: row.renewable_electricity_generating_capacity_per_capita,
        financial_flows_to_developing_countries_us_dollars: row.financial_flows_to_developing_countries__us___,
        renewable_energy_share_in_the_total_final_energy_consumption_percent: row.renewable_energy_share_in_the_total_final_energy_consumption____,
        electricity_from_fossil_fuels_twh: row.electricity_from_fossil_fuels__twh_,
        electricity_from_nuclear_twh: row.electricity_from_nuclear__twh_,
        electricity_from_renewables_twh: row.electricity_from_renewables__twh_,
        low_carbon_electricity_percent_electricity: row.low_carbon_electricity____electricity_,
        primary_energy_consumption_per_capita_kwh_person: row.primary_energy_consumption_per_capita__kwh_person_,
        energy_intensity_level_of_primary_energy_mj_2017_ppp_gdp: row.energy_intensity_level_of_primary_energy__mj__2017_ppp_gdp_,
        value_co2_emissions_kt_by_country: row.value_co2_emissions_kt_by_country,
        renewables_percent_equivalent_primary_energy: row.renewables____equivalent_primary_energy_,
        gdp_growth: row.gdp_growth,
        gdp_per_capita: row.gdp_per_capita,
        density_p_km2: row.density_n_p_km2_,
        land_area_km2: row.land_area_km2_,
        latitude: row.latitude,
        longitude: row.longitude,
      });
      await energy.save();
    })
    .on("end", () => {
      res.redirect("/");
    });
});
