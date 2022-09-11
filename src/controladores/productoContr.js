import  {listarProductos,listarIdProducto,agregarProducto} from '../negocio/productoNeg.js'

import { activarDTO } from '../persistencia/Dtos/ProductoDTO.js'

export const getProducto=async (req, res) => {

    try {
      
      let productos = await listarProductos();
      console.log(productos);
      res.status(201).json({ productos,
                             error:false });
    } catch (error) {
       res.status(400).json({ producto,
                              error:true });
    }

 } 

 export const getHbsProducto=async (req, res) => {

  let productos=await listarProductos()

  //console.log(productos)
  res.render('productos',{productos})

} 

 export const getIdProducto=async (req, res) => {
  try {
    const {id}=req.params

    let producto = await listarIdProducto(id);
    console.log(producto);
    res.status(201).json({ producto,
                           error:false });
  } catch (error) {
     res.status(400).json({ producto,
                            error:true });
  }

} 

 /* export const getProductos = async (req, res) => {
   try {
     let productos = await listarProductos();
     console.log(productos);
     res.status(201).json({ productos,
                            error:false });
   } catch (error) {
      res.status(400).json({ productos,
                             error:true });
   }
 };  */

export const postProducto = async (req, res) => {

  let prod = req.body;

  console.log('1-Dentro controlador')
  console.log(prod)

  //Usa metodo singleton para obtener
  // la hora de inicio del servidor
  //---------------------------------
  //const hora={hora:obtenerHora()}

  //let id={id:Date.now()};
  //let producto={...prod,...id}
  //producto={...producto,...hora}

  //Metodo DTO
  //-----------
  const producto=activarDTO(prod);

 console.log('2-Dentro controlador')
  console.log(producto)
  await agregarProducto(producto);
  
  res.redirect("/producto");
};
