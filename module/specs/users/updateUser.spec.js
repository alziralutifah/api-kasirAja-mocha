import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { updateUser } from "../../function/users/updateUser.js";


describe("Update User Kasir Aja", () => {
    let accessToken;
    let userId;

    it("PUT - Update User Successful", async () => {
        accessToken = await getAccessToken();
        userId = "6f986e29-9994-43ec-8598-59d988074d9c";
        const response = await updateUser(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil diupdate");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2)); 
    })
})