import { Router } from "express";

import { Auth } from './middlewares/Auth';
import { ValidarRH } from "./middlewares/VerificarRH";

import { CreateRhController } from "./controller/Rh/CreateRhController";
import { SessionRhController } from "./controller/Rh/SessionRhController";
import { listRhController } from "./controller/Rh/ListRhController";
import { DemitidoRhController } from "./controller/Rh/DemitidoRhController";

import { CreateSecretariaController } from "./controller/Secretaria/CreateSecretariaController";
import { SessionSecretariaController } from "./controller/Secretaria/SessionSecretariaController";
import { ListSecretariaController } from "./controller/Secretaria/ListSecretariaController";
import { DemissaoSecretariaController } from "./controller/Secretaria/DemissaoSecretariaController";

import { CreateServicoController } from "./controller/Servico/CreateServicoController";
import { ListServicoController } from "./controller/Servico/ListServicoController";
import { RemoveServicoController } from "./controller/Servico/RemoveServicoController";

import { createDentistacontroller } from "./controller/Dentista/createDentistacontroller";
import { listDentistaController
 } from "./controller/Dentista/listDentistaController";
const router = Router();

//ROTA DE LOGIN
router.post('/session/rh', new SessionRhController().handle)
router.post('/session/secretaria', new SessionSecretariaController().handle)


//ROTAS DE RH
router.use(Auth)
router.post('/create/rh', new CreateRhController().handle)
router.get('/list/rh', ValidarRH, new listRhController().show)
router.put('/demissao/rh', ValidarRH,  new DemitidoRhController().handle)

//ROTAS SECRETÁRIA
router.post('/create/secretaria', ValidarRH, new CreateSecretariaController().handle)
router.get('/list/secretaria', ValidarRH, new ListSecretariaController().show)
router.put('/demissao/secretaria', ValidarRH, new DemissaoSecretariaController().handle)

//ROTAS SERVIÇO
router.post('/create/servico', new CreateServicoController().handle)
router.get('/list/servico', new ListServicoController().show)
router.delete('/remove/servico', new RemoveServicoController().handle)

//ROTAS DENTISTA
router.post('/create/dentista', ValidarRH, new createDentistacontroller().handle)
router.get('/list/dentista', ValidarRH, new listDentistaController().show)
export {router};
