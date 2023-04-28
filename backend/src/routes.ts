import { Router } from "express";


import { CreateRhController } from "./controller/Rh/CreateRhController";
import { SessionRhController } from "./controller/Rh/SessionRhController";
const router = Router();


router.post('/create/rh', new CreateRhController().handle)
router.post('/session/rh', new SessionRhController().handle)



export {router};
