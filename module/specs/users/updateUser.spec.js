import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { updateUser } from "../../function/users/updateUser.js";


describe("Update User Kasir Aja", () => {
    let accessToken;
    let userId;

    it("PUT - Update User Successful", async () => {
        accessToken = await getAccessToken();
        userId = "d6706346-1ca8-4943-a074-ec584856005a";
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