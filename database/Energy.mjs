import mongoose from "mongoose";

const EnergySchema = new mongoose.Schema({
  entity: String,
  year: Number,
  access_to_electricity_percent_of_population: Number,
  access_to_clean_fuels_for_cooking: Number,
  renewable_electricity_generating_capacity_per_capita: Number,
  financial_flows_to_developing_countries_us_dollars: Number,
  renewable_energy_share_in_the_total_final_energy_consumption_percent: Number,
  electricity_from_fossil_fuels_twh: Number,
  electricity_from_nuclear_twh: Number,
  electricity_from_renewables_twh: Number,
  low_carbon_electricity_percent_electricity: Number,
  primary_energy_consumption_per_capita_kwh_person: Number,
  energy_intensity_level_of_primary_energy_mj_2017_ppp_gdp: Number,
  value_co2_emissions_kt_by_country: Number,
  renewables_percent_equivalent_primary_energy: Number,
  gdp_growth: Number,
  gdp_per_capita: Number,
  density_p_km2: Number,
  land_area_km2: Number,
  latitude: Number,
  longitude: Number
});

const Energy = mongoose.model("Energy", EnergySchema);

export default Energy;
