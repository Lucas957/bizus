import { createUserBd } from "../models/clients";
import {createUser, sell} from "../services/user"

export const createUserController = async (req, res)=> {

    const {name, wpp} = req.body;
    const users = await createUserBd(name, wpp)
    res.json({users});
    
}