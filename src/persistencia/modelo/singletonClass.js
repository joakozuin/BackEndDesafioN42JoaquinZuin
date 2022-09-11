let instancia=null

const calcFechaHora=() => {
  const dato = new Date();
  const dia = dato.getDate();
  const mes = dato.getMonth() + 1;
  const ano = dato.getFullYear();
  const hor = dato.getHours();
  const min = dato.getMinutes();
  const seg = dato.getSeconds();
  const fecha = [dia, mes, ano].join("/").toString();
  const hora = [hor, min, seg].join(":").toString();
  return [fecha, hora].join(" ");
}

export default class primeraConexion {
    constructor() {
      //this.hora = new Date().toLocaleString;
      this.hora =calcFechaHora();
    }
    
    static getInstancia(){

      
        if(!instancia){
          instancia=new primeraConexion()
          
        } 
        return instancia
    }

    obtenerHora(){
      
        return this.hora
    }
  }