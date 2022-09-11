import express from "express";
//import morgan from "morgan";
import handlebars from "express-handlebars";
import productoRoutes from "./src/rutas/productoRoutes.js";
import singletonRoutes from "./src/rutas/singletonRoutes.js";
import path from 'path';
import { fileURLToPath } from "url";
const __dirname=path.dirname(fileURLToPath(import.meta.url))
import dotenv from 'dotenv';
dotenv.config();
const app = express();

//Middlewares
//app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "\\public"));

app.set('views', __dirname+ "\\src\\vistas");
app.engine('hbs', handlebars.engine({extname:'.hbs',defaultLayout:'index.hbs'}));
app.set('view engine','hbs');


/* console.log('1-'+process.cwd() + "\\src\\vistas");
console.log('2-'+__dirname + "\\src\\vistas"); */



app.use('/producto', productoRoutes)
app.use('/mensaje', singletonRoutes)


const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
