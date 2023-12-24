import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const app = express();
const log = console.log;
const path = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://picturepurrfectwithatwist.com");
    res.sendFile( path , + "index.html");

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.html", {
      error: error.message,
    });
  }
});

// app.get("/PP-Gallery", async (req, res) => {
    
//   console.log(req.body);


// });

app.listen(port, () => {
  log(`Serveris up and running `);
});
