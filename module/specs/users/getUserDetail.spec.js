import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { getUserDetail } from "../../function/users/getUserDetail.js";

describe("Read / Get User Detail Kasir Aja", () => {
    let accessToken;
    let userId;

    it("GET - Succesfully get user detail", async () => {
        accessToken = await getAccessToken();
        userId = "23f4d6bd-1937-4f28-891e-94c941b8d275";
        const response = await getUserDetail(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("user");
        
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", response.body);
    })
})
