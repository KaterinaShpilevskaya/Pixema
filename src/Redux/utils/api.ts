import { RegisterUserData } from './../Types/auth';
import { create } from "apisauce";

const API = create( {baseURL: "https://unelmamovie.com/api/v1"})

const registerUser = (data: RegisterUserData) => {
    return API.post("/auth/register/", data )
}

export default {
    registerUser
}



