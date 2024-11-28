import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { getUserList } from "../../function/users/getUserList.js";


describe("Read / Get User List Kasir Aja", () => {
    let accessToken;

    it("GET - Succesfully get the list of users", async () => {
        accessToken = await getAccessToken();
        const response = await getUserList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("users");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", response.body.data);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));        
    })
})