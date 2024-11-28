import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15); // Membuat string acak
    return `${randomString}@gmail.com`; 
}

export async function updateUser(accessToken, userId) {
    const payload = {
        "name": "update-user",
        "email": await generateRandomEmail()
    }

    const response = await request(baseUrl)
        .put(`/users/${userId}`)
        .send(payload)
        .set("Authorization",`Bearer ${accessToken}`)
    
    return response
}