import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome here");
});

mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("app connected succesfully");
    app.listen(PORT, () => {
      console.log(`app is running in portb No: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
