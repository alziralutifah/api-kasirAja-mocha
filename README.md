# Tugas Pekanan 3 - API Automation

## API Automation - Kasir Aja
This project is an API automation testing framework for the **Kasir Aja** application. It is built using **Mocha** as the testing framework and **Chai** for assertions. The project generates test reports with **Mochawesome** for a detailed and visually appealing output.


## Main Features
1. CRUD Testing:
   
Users: Create, Read, Update, Delete.

Categories: Create, Read, Update, Delete.

3. Authentication:
Mendapatkan token JWT dari endpoint login secara otomatis.
4. Result Reporting:
Menggunakan Mochawesome untuk menghasilkan laporan visual dalam format HTML dan JSON.


## Tech Stack
1. Supertest: For making HTTP requests to API endpoints.
2. Mocha: Test framework for defining and executing test cases.
3. Chai: Assertion library to validate API responses.
4. Mochawesome: Reporter to create visualized test reports.


## Installation
Clone this repository:
```bash
git clone https://github.com/alziralutifah/api-kasirAja-mocha.git
cd kasir-aja-automation
```

Initialize the Project
```bash
npm init -y
```

Install Required Libraries
1. Install Mocha
```bash
npm install mocha --save-dev
```

2. Install Chai
```bash
npm install chai --save-dev
```

3. Install Supertest
```bash
npm install supertest --save-dev
````

4. Install Mochawesome
```bash
npm install mochawesome --save-dev
```

5. Install JSON-Schema
```bash
npm install jsonschema --save-dev
```

Configuring the Base URL in module/data/config.js
```bash
export const baseUrl = "https://kasir-api.zelz.my.id";
```


## Project Structure
```bash
API-KASIRAJA-MOCHA/
│
├── module/
│   ├── data/                # Konfigurasi umum seperti base URL
│   │   └── config.js
│   ├── function/            # Fungsi reusable untuk endpoint API
│       ├── authentications/
│       ├── categories/
│       └── users/
│
├── specs/                   # Test case individu untuk setiap fitur
│   ├── authentications/
│   ├── categories/
│   └── users/
│
├── suites/                  # Mengelompokkan test case
│   └── kasirAja.suite.js
│
├── mochawesome-report/      # Laporan hasil pengujian
│   ├── mochawesome.html
│   └── mochawesome.json
│
├── node_modules/            # Dependency yang diinstal
├── package.json             # File konfigurasi npm
├── package-lock.json        # File lock npm
└── .gitignore               # File untuk mengecualikan folder dari Git
```


## Running the Tests
1. Run CRUD Test Cases: Execute a specific test file using Mocha.
```bash
npx mocha {copy relative path]
```

2. Run a Specific Test Suite: For example, to run the suite for "Kasir Aja".
```bash
npx mocha module\suites\kasirAja.suite.js
```

3. Run Tests with Mochawesome Reporting: Generate a visual report using Mochawesome.
```bash
npx mocha module\suites\kasirAja.suite.js --reporter mochawesome
```

4. Open Mochawesome Report:
After running the tests, the HTML report will be available in:
```bash
mochawesome-report/mochawesome.html.
```
Here is the report generated using Mochawesome:
 ![report-mochawesome](https://github.com/alziralutifah/api-kasirAja-mocha/blob/main/images/report-mochawesome.png)

## Demo Video
To see a demonstration of how to run the API tests, check out the following video:

https://youtu.be/nSvrfVNPz6E

This video will guide you through the process of running the tests and generating the test reports.


## Contributing
If you want to contribute to this project, please fork this repository and submit a pull request with a description of your changes.

## License
This repository does not have an official license. You are free to use and modify the code as needed.

## Contact
If you have any questions or suggestions regarding this repository, feel free to contact me at alziralutifah13@gmail.com.





