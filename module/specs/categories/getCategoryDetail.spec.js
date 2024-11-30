import { expect } from "chai";
import { getCategoryDetail } from "../../function/categories/getCategoryDetail.js";
import { getAccessToken } from "../../helpers/getAccessToken.js";

describe("Read / Get Categories Detail Kasir Aja", () => {
    let accessToken;
    let categoryId;

    it("GET - Succesfully get categories detail", async () => {
        accessToken = await getAccessToken();
        categoryId = "e8ed6ce2-ca8d-451f-91c1-3c15f73220b0";
        const response = await getCategoryDetail(accessToken, categoryId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("category");
        
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })  
})
