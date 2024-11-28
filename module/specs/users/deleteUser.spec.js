import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { deleteUser } from "../../function/users/deleteUser.js";

describe("Delete User Kasir Aja", () => {
    let accessToken;
    let userId;

    it("DELETE - Delete user successful", async () => {
        accessToken = await getAccessToken();
        userId = "267b5c57-4cc6-4d55-a4a9-7d807dcaeedc";
        const response = await deleteUser(accessToken, userId);

        // Assertion
        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil dihapus")

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
    })
})