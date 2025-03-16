import express from "express"
import "dotenv/config"
import fetch from "node-fetch"

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs")
app.use(express.urlencoded({extended : true}))

app.get("/",(req,res) => {
  res.render("index");
})


//start the server here
app.listen(port,() => {
    console.log(`Server started on port ${port}`);
})