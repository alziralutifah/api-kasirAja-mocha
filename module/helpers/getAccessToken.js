import request from "supertest";
import { baseUrl } from "../data/config.js";
import { postLogin } from "../function/authentications/postLogin.js";

export async function getAccessToken() {

    const response = await postLogin();

    const accessToken = (await response).body.data.accessToken

    // const payload = {
    //         "email": "magnolia@gmail.com",
    //         "password": "qwerty123#"
    //     }
    
    // const response = await request(baseUrl)
    //     .post("/authentications")
    //     .send(payload)
        
    // const accessToken = await response.body.data.accessToken;

    return accessToken
}