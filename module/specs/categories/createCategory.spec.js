import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { createCategory } from "../../function/categories/createCategory.js";

describe("Create Categories Kasir Aja", () => {
    let accessToken;

    it("POST - Create categories successful", async () => {
        accessToken = await getAccessToken();
        const response = await createCategory(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("Category berhasil ditambahkan");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })
})