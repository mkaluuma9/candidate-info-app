# candidate-info-app
A front end and back end application that enables job candidates to apply for a job or update their records.
RUNNING THE APPLICATION
1. Clone the repository by copying the link then run the following commands
2. git clone https://github.com/mkaluuma9/candidate-info-app.git
3. cd candidate-info-app
4. git init- To innitialise the repository


RUNNING THE BACKEND
1. git checkout backend- This will take you into the back end branch where the back end code is.

Connecting to the database
1. Create a .env file in the config folder
The .env file has:

DB_HOST=localhost
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=candidate_info_db
DB_PORT=5432
These are the details to your postgres database


3. npm install
4. node app.js
Application will run on http://localhost:3001

RUNNING THE FRONTEND
1. git checkout front-end (This will take you to the front end branch)
2. npm install
3. npm start
Application will run on http://localhost:3000

RUNNING THE TESTS
FRONT END TESTS
1. npm test

BACK END TESTS
1. npm test-- tests/

TASKS DONE
1. Creation of form that validates user inputs upon registration, then creates the user if they dont exist and updates them otherwise.
2. REST APIs to create/update user, delete user and view users in the database
3. Unit tests done for the API controllers and models
4. Caching used with local storage to store the ids of users created
5. MVC design pattern applied to seprate concerns
6. Maintaining a high code quality as requested

WAYS OF IMPROVEMENT
1. Standard coding formats of programming languages to make it easier to run the same languages and tools for the same project fore instance I did not use Docker and Redis because of the complications that might happen while running the app from your side

ASSUMPTIONS
1. Only form functionality was required and no need for login or register
2. "Best time to call" field required a string since there was no specified format
3. Node.js, Postgres are already installed on the machines

TOTAL TIME SPENT
27 Hours
