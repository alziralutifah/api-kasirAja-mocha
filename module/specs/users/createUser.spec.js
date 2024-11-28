import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { createUser } from "../../function/users/createUser.js";

describe("Create User Kasir Aja", () => {
    let accessToken;

    it("POST - Create a new user successful", async () => {
        accessToken = await getAccessToken();
        const response = await createUser(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil ditambahkan");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
        console.log("Raw Response body:", response.body);
    })
})