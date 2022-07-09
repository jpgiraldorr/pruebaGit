// constante para iniciar el framework de trabajo
const express = require("express");
const mongoose = require("mongoose");

// constantes que recibe rodas las funciones del framework
const app = express();
// constante para trabajar archivos .env
require("dotenv").config();
// constante para conexion del puerto
const port = process.env.PORT || 5000;

// verificar la conexión del puerto
app.listen(port, () => {
  console.log("puerto activo : ", port);
});

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("conectados a la bd"))
  .catch((err) => console.error(err));
