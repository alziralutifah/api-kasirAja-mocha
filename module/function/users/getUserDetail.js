import request from "supertest"
import { baseUrl } from "../../data/config.js"


export async function getUserDetail(accessToken, userId) {
    const response = await request(baseUrl)
        .get(`/users/${userId}`)
        .set("Content-Type", "application/json")
        .set("Authorization",`Bearer ${accessToken}`)

    return response
}