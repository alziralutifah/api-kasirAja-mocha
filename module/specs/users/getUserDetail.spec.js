import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { getUserDetail } from "../../function/users/getUserDetail.js";

describe("Read / Get User Detail Kasir Aja", () => {
    let accessToken;
    let userId;

    it("GET - Succesfully get user detail", async () => {
        accessToken = await getAccessToken();
        userId = "d6706346-1ca8-4943-a074-ec584856005a";
        const response = await getUserDetail(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("user");
        
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response Body:", JSON.stringify(response.body, null, 2));
    })
})
