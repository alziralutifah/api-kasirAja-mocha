import { assert, expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { getCategoryList } from "../../function/categories/getCategoryList.js";

describe("Read / Get Categories List", () => {
    let accessToken;

    it("GET - Succesfully Get The List of Categories", async () => {
        accessToken = await getAccessToken();
        const response = await getCategoryList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("categories");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })
})