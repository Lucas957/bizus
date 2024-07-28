import { Router } from "express";
import {createUser, sell} from "../services/user"
import { createUserController } from "../controllers/clients";

const router = Router();


router.post('/', (req, res)=>{

    res.json({main:true});
    console.log(req.body)

})

router.post('/createUser', createUserController)

router.post('/buy', async (req, res)=>{

    const user = await sell(req.body.product, req.body.pg, parseInt(req.body.id_buyer, 10))
    res.json({user});

})

export default router;