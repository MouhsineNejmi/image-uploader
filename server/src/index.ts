import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "30mb", inflate: true }));

app.listen(3001, () => {
  console.log('started');
})