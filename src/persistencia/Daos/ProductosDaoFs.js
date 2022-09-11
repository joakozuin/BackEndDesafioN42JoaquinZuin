
import fs from 'fs';

class ProductosDaoFs {
  constructor(rutaFs) {
    this.ruta = rutaFs;
    this.productos = [];
  }

  #readFile = async () => {
    const prod = await fs.promises.readFile(this.ruta, "utf-8");
    this.productos = JSON.parse(prod);
  };

  #createFile = async () => {
    const archivo = JSON.stringify(this.productos, null, 2);
    await fs.promises.writeFile(this.ruta, archivo);
  };

  async getAll() {
    try {
      await this.#readFile();

      //console.log(this.productos.length);
      
      return this.productos;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getById(id1) {
    try {
      await this.#readFile();
      
      let id=parseInt(id1);
      
      const index = this.productos.findIndex((pro) => pro.id === id);
      return this.productos[index];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async create(producto) {
    try {
      console.log(producto);
      await this.#readFile();
      this.productos.push(producto);
      await this.#createFile();
      return producto;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async deleteAll() {
    try {
      this.productos = [];
      await this.#createFile();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async deleteById(id1) {
    try {
      await this.#readFile();

      let id=parseInt(id1);

      const index = this.productos.findIndex((pro) => pro.id === id);
      const productoEliminado = this.producto[index];
      await this.#createFile();
      return productoEliminado;
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async updateById(id1, infoProducto) {

    try {
      await this.#readFile();

      let id=parseInt(id1);

      const index = this.productos.findIndex((pro) => pro.id === id);
      const productoActualizado = { ...this.productos[index], ...infoProducto };
      this.producto.splice(index, 1, productoActualizado);
      await this.#createFile();
      return productoActualizado;
    } catch (error) {
      console.log(error);
      return {};
    }
 
  }
}
export default ProductosDaoFs
