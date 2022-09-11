//import assert from 'assert'
import chai from 'chai'
import productosDaoFs from '../src/persistencia/Daos/ProductosDaoFs.js'
const assert=chai.assert
const expect=chai.expect
//const should = chai.should
import request from 'supertest'

 describe("ProductosDaoFs Funtion Testing", () => {

  const ruta = "./src/BD/productos.json";
  let productos

  const producto={
    id: 1662773774087,
    nombre: "Torrontes",
    descripcion: "Vino",
    hora: "9/9/2022 22:35:16"
  }


  beforeEach(() => {

    productos = new productosDaoFs(ruta);

  })

  describe("Pruebas getAll() productos", () => {

    it("Mostrar todos los productos", () => {
      let pro = async () => {
        const prod = await productos.getAll();
        expect(prod).to.have.lengthOf(9);
      };

      pro();
    });

    it("Propiedades de los productos", () => {
      let pro = async () => {
        const prod = await productos.getAll();
        expect(pro).to.contain.property("id");
        expect(pro).to.contain.property("nombre");
        expect(pro).to.contain.property("descripcion");
        expect(pro).to.contain.property("hora");
      };

      pro();
    });



  });

    describe("Pruebas getById productos", () => {

      it("id=1662570925355", () => {
        let pro = async () => {
          const prod = await productos.getById(1662570925355);
          expect(prod).to.have.lengthOf(1);
        };

        pro();
      });

      it("id=11662773716658", () => {
        let pro = async () => {
          const prod = await productos.getById(1662773716658);
          expect(prod).to.have.lengthOf(1);
        };

        pro();
      });


    });
  
   

  describe('Pruebas create() producto',()=>{

    it("Propiedades del producto", () => {

     


      let pro = async () => {

        const prod = await productos.create(producto);
        expect(prod).to.contain.property("id");
        expect(prod).to.contain.property("nombre");
        expect(prod).to.contain.property("descripcion");
        expect(prod).to.contain.property("hora");
      

      pro();
    }
    });

    it("Tipo de datos del producto", () => {

      let pro = async () => {

        const prod = await productos.create(producto);
        expect(prod).typeOf('objet');
        
      pro();
    }
    });


  });
        
});

describe("Probando End Point", () => {
  describe("GET", () => {
    it("status 200", async () => {
      const respuesta = await request("http://localhost:8081").get('/producto');
      expect(respuesta.status).to.equal(200);
    });

    it("length correcto", async () => {
      const respuesta = await request("http://localhost:8081").get('/producto');
      expect(respuesta.body).to.have.lengthOf(5);
    });

   });
  });

