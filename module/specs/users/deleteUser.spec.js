import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { deleteUser } from "../../function/users/deleteUser.js";

describe("Delete User Kasir Aja", () => {
    let accessToken;
    let userId;

    it("DELETE - Delete user successful", async () => {
        accessToken = await getAccessToken();
        userId = "6f986e29-9994-43ec-8598-59d988074d9c";
        const response = await deleteUser(accessToken, userId);

        // Assertion
        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil dihapus")

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })
})