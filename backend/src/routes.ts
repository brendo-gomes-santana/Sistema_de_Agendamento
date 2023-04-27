import { Router } from "express";


import { CreateRhController } from "./controller/Rh/CreateRhController";

const router = Router();


router.post('/rh', new CreateRhController().handle)



export {router};
