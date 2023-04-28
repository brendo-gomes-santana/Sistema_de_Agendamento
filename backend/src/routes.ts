import { Router } from "express";
import { Auth } from './middlewares/Auth';


import { CreateRhController } from "./controller/Rh/CreateRhController";
import { SessionRhController } from "./controller/Rh/SessionRhController";
import { listRhController } from "./controller/Rh/ListRhController";

const router = Router();

router.post('/session/rh', new SessionRhController().handle)

router.use(Auth)
router.post('/create/rh', new CreateRhController().handle)
router.get('/list/rh', new listRhController().handle)


export {router};
