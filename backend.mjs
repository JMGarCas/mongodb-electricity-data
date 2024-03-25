import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json" assert { type: "json" };
import EnergyRoutes from "./routes/EnergyRoutes.mjs";
import PopulateDatabaseController from "./controllers/PopulateDatabaseController.mjs";

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(express.json());
app.use(PopulateDatabaseController);
app.use(EnergyRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000);
