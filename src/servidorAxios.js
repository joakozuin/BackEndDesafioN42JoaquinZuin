import axios from 'axios'

/* const getProductos = async() =>{
   const productos = await axios.get('http://localhost:8081/producto');
   console.log(productos.data)
} */
const getProductos = async() =>{
     await axios.get('http://localhost:8081/producto')
     .then((respuesta)=>{
        console.log(respuesta.data)
    }) 
     .catch((error)=>{
        console.log(error)
    })
    
 }

 const getIdProducto = async(id) =>{
    await axios.get(`http://localhost:8081/producto/${id}`)
    .then((respuesta)=>{
       console.log(respuesta.data)
   }) 
    .catch((error)=>{
       console.log(error)
   })
   
}


const postProducto = async(producto) =>{
    await axios.post('http://localhost:8081/producto',producto)
    .then((respuesta)=>{
        console.log(respuesta.data)
        getProductos()
    }) 
     .catch((error)=>{
        console.log(error)
    })

}
//getProductos()

const producto={
    nombre:"Torrontes",
    descripcion:"Vino",
    precio:"2000"
}

 //postProducto(producto)

 getIdProducto('1662572305533')