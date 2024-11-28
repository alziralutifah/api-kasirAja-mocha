import { expect } from "chai";
import { getAccessToken } from "../../helpers/getAccessToken.js";
import { deleteCategory } from "../../function/categories/deleteCategory.js";

describe("Delete Categories Kasir Aja", () => {
    let accessToken;
    let categoryId;

    it("DELETE - Delete categories successful", async () => {
        accessToken = await getAccessToken();
        categoryId = "1c52a402-1839-42ba-b447-aa6f943b0189";
        const response = await deleteCategory(accessToken, categoryId);

        // Assertion
        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response Body:", JSON.stringify(response.body, null, 2));
    })
})