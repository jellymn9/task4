import {Request,Response} from "express";
import { RegisterValidation } from "../validation/register.validation";
//import {getManager} from "typeorm";


export const Register = (req: Request, res: Response) => {
    const body = req.body;
    const {error} = RegisterValidation.validate(body);
    if(error){
        return res.status(400).send(error.details);
    }

    if(body.password !== body.password_confirm){
        return res.status(400).send({
            message: "Password did not match!"
        });
    }

    //const repository = getManager()


    res.send(body);
}