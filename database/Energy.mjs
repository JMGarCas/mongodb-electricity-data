import mongoose from "mongoose";
const { Schema } = mongoose;

const energySchema = new Schema({
  Entity: String,
  Year: Number,
  Access_to_electricity_percent_of_population: Number,
  Access_to_clean_fuels_for_cooking: Number,
  Renewable_electricity_generating_capacity_per_capita: Number,
  Financial_flows_to_developing_countries_US_dollars: Number,
  Renewable_energy_share_in_the_total_final_energy_consumption_percent: Number,
  Electricity_from_fossil_fuels_TWh: Number,
  Electricity_from_nuclear_TWh: Number,
  Electricity_from_renewables_TWh: Number,
  Low_carbon_electricity_percent_electricity: Number,
  Primary_energy_consumption_per_capita_kWh_person: Number,
  Energy_intensity_level_of_primary_energy_MJ_2017_PPP_GDP: Number,
  Value_co2_emissions_kt_by_country: Number,
  Renewables_percent_equivalent_primary_energy: Number,
  gdp_growth: Number,
  gdp_per_capita: Number,
  Density_P_Km2: Number,
  Land_Area_Km2: Number,
  Latitude: Number,
  Longitude: Number
});

const Energy = mongoose.model("Energy", energySchema);

export default Energy;
