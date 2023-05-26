import { Router } from "express";

import { Auth } from './middlewares/Auth';
import { ValidarRH } from "./middlewares/VerificarRH";
import { VerificarFunc } from "./middlewares/VerifcarFunc";

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
import { listDentistaController } from "./controller/Dentista/listDentistaController";
import { sessionDentistaController } from "./controller/Dentista/sessionDentistaController";
import { demissaoDentistaController } from "./controller/Dentista/demissaoDentistaController";

import { createUserController } from "./controller/Users/createUserController";
import { sessionUserController } from "./controller/Users/sessionUserController";
import { listUserController } from "./controller/Users/listUserController";

import { createAgendamentoController } from "./controller/agendamento/createAgendamentoController";
import { listAgendamentoController } from "./controller/agendamento/listAgendamentoController";
import { concluindoAgendamentoController } from "./controller/agendamento/concluindoAgendamentoController";
import { ListPorUserController } from "./controller/agendamento/ListPorUserController";
import { listPorDentistaController } from "./controller/agendamento/listPorDentistaController";

const router = Router();

//ROTA DE LOGIN
router.post('/session/rh', new SessionRhController().handle)
router.post('/session/secretaria', new SessionSecretariaController().handle)
router.post('/session/dentista', new sessionDentistaController().hadnle)
router.post('/session/user', new sessionUserController().handle)

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
router.post('/create/servico', VerificarFunc, new CreateServicoController().handle)
router.get('/list/servico', VerificarFunc, new ListServicoController().show)
router.delete('/remove/servico',VerificarFunc, new RemoveServicoController().handle)

//ROTAS DENTISTA
router.post('/create/dentista', ValidarRH, new createDentistacontroller().handle)
router.get('/list/dentista', new listDentistaController().show)
router.put('/demissao/dentista',ValidarRH ,new demissaoDentistaController().handle)

//ROTAS USUÁRIO
router.post('/create/user', new createUserController().handle)
router.get('/list/user', new listUserController().show)

//ROTAS AGENDAMENTO
router.post('/create/agendamento', VerificarFunc, new createAgendamentoController().handle)
router.get('/list/agendamento',VerificarFunc, new listAgendamentoController().show)
router.put('/concluir/agendamento',VerificarFunc, new concluindoAgendamentoController().handle)
router.get('/list/agendamento/dentista', VerificarFunc, new listPorDentistaController().show)
router.get('/list/agendamento/user', new ListPorUserController().show)

export { router };


