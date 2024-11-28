import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function updateCategory(accessToken, categoryId) {
    const payload = {
        "name": "Tiramisu Cake",
        "description": "Cake lapis yang terinspirasi dari tiramisu klasik, terdiri dari lapisan sponge cake yang lembut, disiram dengan kopi espresso, dan dilapisi dengan krim mascarpone. Rasa kopi yang kuat berpadu dengan manisnya krim, memberikan sensasi nikmat di setiap gigitan."
    }

    const response = await request(baseUrl)
        .put(`/categories/${categoryId}`)
        .send(payload)
        .set("Authorization",`Bearer ${accessToken}`)
    
    return response
}