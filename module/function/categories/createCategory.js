import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function creaetCategory(accessToken) {
    const payload = {
        "name": "Chocolate Lava Cake",
        "description": "Kue cokelat hangat dengan inti molten yang meleleh begitu dipotong. Diolah dengan bahan cokelat premium dan disajikan dengan es krim vanila di atasnya untuk kombinasi rasa yang sempurna."
    }

    const response = await request(baseUrl)
        .post("/categories")
        .send(payload)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}