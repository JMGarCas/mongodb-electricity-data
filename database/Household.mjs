import mongoose from "mongoose";

const householdSchema = new mongoose.Schema({
  date_time: Date,
  global_active_power: Number,
  global_reactive_power: Number,
  voltage: Number,
  global_intensity: Number,
  kitchen: Number,
  laundry: Number,
  heater: Number,
});

const Household = mongoose.model("Household", householdSchema);

export default Household;
