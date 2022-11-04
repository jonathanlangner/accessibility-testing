import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

const app = express();
// Establishing the port
const PORT = process.env.PORT ||5000;

app.listen(PORT, console.log(
    `Server started on port ${PORT}`));

  // serve your css as static
  console.log(__dirname);
  app.use(express.static(__dirname));    

// Getting Request
app.get('/', (req, res) => {
    // Sending the response
    res.sendFile(__dirname + '/index.html');

    // Ending the response
    res.end();
})



