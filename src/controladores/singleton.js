import  {obtenerHora} from '../negocio/singleton.js'

export const getSingleton=async (req, res) => {
  const hor=obtenerHora()
  console.log(`En el Controlador hora:${hor}`)
    
    res.json({hora:hor})

 } 


