const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "a4a534c52f7fd8677bc1e2957401debc";

  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let weather;
  let error = null;
  try {
    const response = await axios.get(APIurl);
    weather = response.data;
  } catch (error) {
    weather = null;
    error = 'Error, Please try again';
}
res.render("index", { weather ,error });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
