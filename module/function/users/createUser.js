import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15); // Membuat string acak
    return `${randomString}@gmail.com`; 
}

export async function createUser(accessToken) {
    const payload = {
        "name": "Market-Serbaguna",
        "email": await generateRandomEmail(), //using random email
        "password": "admin123@"
    }

    const response = await request(baseUrl) 
        .post("/users")
        .send(payload)
        .set("Authorization",`Bearer ${accessToken}`)

    return response
}