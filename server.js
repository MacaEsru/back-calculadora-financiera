const express = require("express");
const cors = require("cors");
const calculadoraRoutes = require('./src/calculadora/routes');

const app = express();
const port = 3000;


app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.use("/api/v1/calculadora", calculadoraRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
