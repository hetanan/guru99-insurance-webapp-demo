# guru99-insurance-webapp-demo


# Description
This is a demo project for insurance web application.

# Pre-requisites and System Requirements
To learn about all system requirements please refere to cypress offical documentation here: https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

Using Node and npm

1. node.js 18.x
2. node.js 20.x and above
3. npm 9.x.x

Using Docker

1. Install Docker Desktop for Mac or Windows from here: https://docs.docker.com/get-docker/
2. When using Docker make sure Docker is running in background

Working with version control

1. Git. Install git from here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Working with IDE

1. Visual Studio Code. Install VS Code from here: https://code.visualstudio.com/download


# How to run

End user can use either npm/node or docker to run this project.

Running with npm/node or cypress test runner:

1. Clone this repository
2. Open terminal (or any IDE) and go to the project directory
3. run command ```npm install``` to install all dependencies
4. run command ```npm run cypress:run``` or ```npx cypress run``` to run all tests. This command will run all tests in headless mode against Electron browser.
5. run command ```npm run cypress:open``` or ```npx cypress open``` to open cypress test runner

Running with docker container:

make sure docker is running in background

1. Clone this repository
2. Open terminal (or any IDE) and go to the project directory
3. run command ```docker build -t insuranceapp .``` to build docker image
4. run command ```docker run -it insuranceapp``` to run all tests. This command will run all tests in headless mode withing container.

# Project Framework

Project is build on **Page Object Model** design pattern. It is a design pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. Cypress offers to divide each page of Web application under test into multiple pages and use classes depict those pages. Each page will comprise of page elements and actions that can be performed on those elements. This way we can separate page actions and locators from test code.

In this repo:
1. **cypress/pages** directory contains all page classes with elements and actions
2. **cypress/e2e** directory contains all test files
3. **testDocuments** directory contains all test documents such as Test plan and Sample Test Scenarios
4. **cypress/fixtures** directory contains all test data (not applicable in this version but can be used to store test data)
5. **cypress/support** directory contains all reusable functions and commands (not applicable in this version but can be used to store reusable functions and commands)
6. **cypress/videos** directory contains all test videos (in this version is set to True)
7. **cypress/screenshots** directory contains all test screenshots (system captures all screenshots on test failure)
8. **cypress/reports/html** directory contains html test report (generated based on merged json test result file)
9. **cypress/results** directory contains json test reports (merged)
10. **cypress/results/json** directory contains json test reports (individual)



# Test report

1. After running tests with cypress test runner, html test report will be generated in **cypress/reports/html** directory (name: **mochawesome-bundle.html**)
2. After running json test reports are generated under **cypress/results/json/mochawesome-report** directory for an individual run
3. Merged json report is generated under **cypress/results** directory (name: **mochawesome-bundle.json**)


# Things to improve

1. Build dynamic test data
2. Add more tests focusing on different scenarios
3. Add CI/CD capabilities
4. Incorporate cypres env variables/file to store credentials
5. Add more reusable functions and commands

# Tools one can use to improve code quality

1. Introducing linting tools such as eslint
2. Introducing code coverage tools
3. Introducing AI tool such as copilot to improve code quality
