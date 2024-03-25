import express from "express";
import fs from "fs";
import csv from "csv-parser";
import Household from "./database/Household.mjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json" assert { type: "json" };
import HouseholdRoutes from "./routes/HouseholdRoutes.mjs";

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);

const app = express();

app.use(HouseholdRoutes)

app.get("/", (req, res) => {
  res.send("hello");
});

function convertDateFormat(input) {
  const [month, day, year] = input.split("/");
  return `20${year.padStart(2, "0")}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;
}

app.get("/populate-database", (req, res) => {
  fs.createReadStream("./static/hpc.csv")
    .pipe(csv())
    .on("data", (row) => {
      const formattedDateStr = convertDateFormat(row.Date); // replace "date" with the actual column name
      const dateTimeStr = `${formattedDateStr} ${row.Time}`; // replace "time" with the actual column name
      const dateTime = new Date(dateTimeStr);

      const household = new Household({
        date_time: dateTime,
        global_active_power: row.Global_active_power,
        global_reactive_power: row.Global_reactive_power,
        voltage: row.Voltage,
        global_intensity: row.Global_intensity,
        kitchen: row.Sub_metering_1,
        laundry: row.Sub_metering_2,
        heater: row.Ssub_metering_3,
      });
      household.save();
    })
    .on("end", () => {
      res.redirect("/");
    });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000);
