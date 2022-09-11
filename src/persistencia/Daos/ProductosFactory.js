import productosDaoMem from './ProductosDaoMem.js'
import productosDaoFs from './ProductosDaoFs.js'
import dotenv from 'dotenv';
dotenv.config();

const opcion=process.env.factoryOptions || 'file'

let productoModel
const ruta='./src/BD/productos.json'

switch (opcion) {
  case "file":
    console.log("1-Factory file");
    productoModel = new productosDaoFs(ruta);
    break;
  default:
    console.log("2-Factory Mem");
    productoModel = new productosDaoMem();
}

export default productoModel
/* export const agregarProducto=async (producto)=>{ 
    await productoModel.create(producto)
}

export const listarProductos=async ()=>{ 
    return await productoModel.getAll()
} */