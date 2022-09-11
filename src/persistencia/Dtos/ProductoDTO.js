import  {obtenerHora} from '../../negocio/singleton.js'

export default class productoDTO{

    constructor({nombre, descripcion,cant}){
        //this.id=new Date();
        this.id=Date.now();
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.cant=cant;

        //Usa metodo singleton para obtener
        // la hora de inicio del servidor
        //----------------------------------
        this.hora=obtenerHora();
    }

}

export function activarDTO(param){ 
    if(Array.isArray(param)){
        return param.map(producto=> new productoDTO(producto))
    }else{
        return new productoDTO(param);
    }
}