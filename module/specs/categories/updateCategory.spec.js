import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { updateCategory } from "../../function/categories/updateCategory.js";

describe("Update Categories Kasir Aja", () => {
    let accessToken;
    let categoryId;

    it("PUT - Update Categories Successful", async () => {
        accessToken = await getAccessToken();
        categoryId = "df819489-b888-4e63-b566-a16c43516d95";
        const response = await updateCategory(accessToken, categoryId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response Body:", JSON.stringify(response.body, null, 2));
    })
})