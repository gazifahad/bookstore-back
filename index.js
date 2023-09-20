import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome here");
});

app.listen(PORT, () => {
  console.log(`app is running in portb No: ${PORT}`);
});
mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("app connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
