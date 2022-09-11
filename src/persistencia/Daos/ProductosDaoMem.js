
class ProductosDaoMem{
    constructor(){

        this.productos=[];

    }

    getAll(){
      return this.productos
    }

    getById(id){

     const index=this.productos.findIndex(pro=>pro.id===id);
     return this.productos[index];

    }

    create(producto){
     this.productos.push(producto);
     return producto
    }
   
    deleteAll(){
     this.productos=[]
    }
    deleteById(id){
        const index=this.productos.findIndex(pro=>pro.id===id);
        const productoEliminado=this.producto[index];
        return productoEliminado
    }
    updateById(id,infoProducto){
        const index=this.productos.findIndex(pro=>pro.id===id);
               
        const productoActualizado={...this.productos[index],...infoProducto};

        this.producto.splice(index,1,productoActualizado);
        return productoActualizado
    }

}
export default  ProductosDaoMem
