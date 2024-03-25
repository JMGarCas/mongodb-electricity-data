import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json' assert { type: 'json' };

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000);
