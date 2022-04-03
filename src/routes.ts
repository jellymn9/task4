import { Router } from "express";
import {Register} from "./controller/auth.controller";

export const routes = (router: Router) => {
    //console.log(router);
    router.post("/api/register", Register);
}