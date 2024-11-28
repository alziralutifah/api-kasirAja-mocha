import { expect } from "chai";
import { postLogin } from "../../function/authentications/postLogin.js";

describe("Authentications", () => {
    it("POST - Login Successful", async () => {
        const response = await postLogin();

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Authentication berhasil ditambahkan');

        console.log("Status Code: ", response.status); 
        console.log("Response body: ", response.body)
    })
})