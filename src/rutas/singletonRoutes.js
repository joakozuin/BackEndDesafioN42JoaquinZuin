import { Router } from "express";

import { getSingleton} from "../controladores/singleton.js";

const router = Router();

router.get("/", getSingleton)

export default router;
