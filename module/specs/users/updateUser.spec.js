import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { updateUser } from "../../function/users/updateUser.js";


describe("Update User Kasir Aja", () => {
    let accessToken;
    let userId;

    it("PUT - Update User Successful", async () => {
        accessToken = await getAccessToken();
        userId = "23f4d6bd-1937-4f28-891e-94c941b8d275";
        const response = await updateUser(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil diupdate");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
        console.log("Raw Response body:", response.body);
    })
})