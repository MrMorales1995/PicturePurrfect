import bodyParser from 'body-parser';
import {dirname} from 'path';
import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
export const router = express.Router(); // router functions created and exported

const app = express();
const log = console.log;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/PicturePurrfect.html"));
});
router.get("/PP-Gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/PP-Gallery.html"));
});