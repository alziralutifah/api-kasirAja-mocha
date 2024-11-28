import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function postLogin() {

    const payload = {
        "email": "magnolia@gmail.com",
        "password": "qwerty123#"
    }

    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload)

    return response
}