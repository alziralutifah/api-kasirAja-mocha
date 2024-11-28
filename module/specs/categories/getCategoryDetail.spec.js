import { expect } from "chai";
import { getCategoryDetail } from "../../function/categories/getCategoryDetail.js";
import { getAccessToken } from "../../helpers/getAccessToken.js";

describe("Read / Get Categories Detail Kasir Aja", () => {
    let accessToken;
    let categoryId;

    it("GET - Succesfully get categories detail", async () => {
        accessToken = await getAccessToken();
        categoryId = "5d13ded1-fce1-4aad-a72f-491fb4d9ea2b";
        const response = await getCategoryDetail(accessToken, categoryId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("category");
        
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", response.body);
    })  
})
