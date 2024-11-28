import { expect } from "chai";
import { getAccessToken } from "../helpers/getAccessToken.js";
import { getUserList } from "../function/users/getUserList.js";
import { getUserDetail } from "../function/users/getUserDetail.js";
import { createUser } from "../function/users/createUser.js";
import { updateUser } from "../function/users/updateUser.js";
import { deleteUser } from "../function/users/deleteUser.js";
import { creaetCategory } from "../function/categories/createCategory.js";
import { getCategoryList } from "../function/categories/getCategoryList.js";
import { getCategoryDetail } from "../function/categories/getCategoryDetail.js";
import { updateCategory } from "../function/categories/updateCategory.js";
import { deleteCategory } from "../function/categories/deleteCategory.js";


describe("End to End Kasir Aja Test", () => {
    let accessToken;
    let userId;
    let categoryId;

    before(async function () {
        accessToken = await getAccessToken();
    });

    //Users
    //Create
    it("POST - Create a new user successful", async () => {
        const response = await createUser(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil ditambahkan");

        // Simpan userId dari respons create user
        userId = response.body.data.userId;

        console.log("User ID created: ", userId);
        console.log("Status Code: ", response.status); 
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })
   

    //Read
    it("GET - Should get user detail", async () => {
        const response = await getUserDetail(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("user");
        
        console.log("Status Code: ", response.status); 
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })

    //Read
    it("GET - Should get a list of users", async () => {
        const response = await getUserList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("users");

        console.log("Status Code: ", response.status); 
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })

    //Update
    it("PUT - Update User Successful", async () => {
        const response = await updateUser(accessToken, userId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil diupdate");

        console.log("Status Code: ", response.status); 
        console.log("Raw Response Body:", JSON.stringify(response.body, null, 2));
    })
    

    //Delete
    it("DELETE - Delete user successful", async () => {
        console.log("User ID:", userId);
        const response = await deleteUser(accessToken, userId);

        // Assertion
        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("User berhasil dihapus")

        console.log("Status Code: ", response.status); 
        console.log("Raw Response Body:", JSON.stringify(response.body, null, 2));
    })

    //Categories
    //Create
    it("POST - Create categories successful", async () => {
        const response = await creaetCategory(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.message).to.equal("Category berhasil ditambahkan");
        
        // Simpan categoryId dari respons create category
        categoryId = response.body.data.categoryId;

        console.log("Category ID created: ", categoryId);
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Message: ", response.body.message);
        console.log("Raw Response body:", response.body);
    })

    //Read
    it("GET - Succesfully Get The List of Categories", async () => {
        const response = await getCategoryList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("categories");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", JSON.stringify(response.body, null, 2));
    })

    //Read
    it("GET - Succesfully get categories detail", async () => {
        const response = await getCategoryDetail(accessToken, categoryId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");
        expect((await response).body.data).to.have.property("category");
        
        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", response.body);
    })

    it("PUT - Update Categories Successful", async () => {
        const response = await updateCategory(accessToken, categoryId);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
        console.log("Raw Response body:", response.body);
    })

    it("DELETE - Delete categories successful", async () => {
        const response = await deleteCategory(accessToken, categoryId);

        // Assertion
        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal("success");

        console.log("Status Code: ", response.status); 
        console.log("Status: ", response.body.status);
    })
})

