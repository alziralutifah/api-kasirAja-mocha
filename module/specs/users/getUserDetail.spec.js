import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { getUserDetail } from "../../function/users/getUserDetail.js";

describe("Read / Get User Detail Kasir Aja", () => {
    let accessToken;
    let userId;

    it("GET - Succesfully get user detail", async () => {
        accessToken = await getAccessToken();
        userId = "6f986e29-9994-43ec-8598-59d988074d9c";
        const response = await getUserDetail(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("user");
        
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response Body:", JSON.stringify(response.body, null, 2));
    })
})
