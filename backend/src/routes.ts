import { Router } from "express";
import { Auth } from './middlewares/Auth';


import { CreateRhController } from "./controller/Rh/CreateRhController";
import { SessionRhController } from "./controller/Rh/SessionRhController";
import { listRhController } from "./controller/Rh/ListRhController";
import { DemitidoRhController } from "./controller/Rh/DemitidoRhController";

import { CreateSecretariaController } from "./controller/Secretaria/CreateSecretariaController";
import { SessionSecretariaController } from "./controller/Secretaria/SessionSecretariaController";

const router = Router();

//ROTA DE LOGIN
router.post('/session/rh', new SessionRhController().handle)
router.post('/session/secretaria', new SessionSecretariaController().handle)


//ROTA DE RH
router.use(Auth)
router.post('/create/rh', new CreateRhController().handle)
router.get('/list/rh', new listRhController().handle)
router.put('/demissao/rh', new DemitidoRhController().handle)

//ROTA SECRETÁRIA
router.post('/create/secretaria', new CreateSecretariaController().handle)

export {router};
