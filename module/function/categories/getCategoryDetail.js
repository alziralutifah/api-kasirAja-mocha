import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function getCategoryDetail(accessToken, categoryId) {
    const response = await request(baseUrl)
        .get(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${accessToken}`)
    
    return response
}