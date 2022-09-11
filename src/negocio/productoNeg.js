
import  productoModel from '../persistencia/Daos/ProductosFactory.js'

export const agregarProducto=async (producto)=>{ 
    try {
        await productoModel.create(producto) 
    }
     catch (error) {
        throw new Error('Error no se pudo guardar el producto')
    }
}
export const listarProductos=async ()=>{ 
    try {
        return await productoModel.getAll()
    }
     catch (error) {
        throw new Error('Error no se pududieron leer los productos')
    }

}
export const listarIdProducto=async (id)=>{ 
    try {
    
        return await productoModel.getById(id)
    }
     catch (error) {
        throw new Error('Error no se pudo leer el producto')
    }
}
