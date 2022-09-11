import { Router } from "express";

import { getProducto,
         getHbsProducto,
         getIdProducto,
         postProducto
     } from "../controladores/productoContr.js";

const router = Router();

router.get("/", getProducto);
router.get("/hbs", getHbsProducto);
router.get("/:id", getIdProducto);
//router.put('/:id', putProducto);
//router.delete('/:id', delProducto);
router.post("/", postProducto);

export default router;
