# Nutcache-challenge
## Employee Management
It consists on an app that registers employees, shows their informations, such as: start date, name, email, team, etc.
And it has the four basic operations on the app, famously known as a CRUD.

##### Tools and frameworks used on this project
- ReactJS, NodeJS, express, PostgreSQL

##### How to install dependencies and run the project
###### Using npm:
- run `npm install` in order to install all dependencies

###### Using yarn:
- run `yarn install` or just `yarn` in order to install all dependencies

##### If it doesn't work?
- You can install all the dependencies running:
`npm install cors axios bootstrap react-bootstrap reactstrap react-icons`
or
`yarn add cors axios bootstrap react-bootstrap reactstrap react-icons`

#### After installing all dependencies
- You just need to run `npm start` or `yarn start`.

### Extra: Backend
- It was build with the express framework, so you'll need to install it in order to run the app

##### Installing all dependencies
- `npm install` or `yarn install`
- Just in case, if there is some error, you can install each dependencie with the following command:
`npm install (or yarn add) express body-parser cors knex nodemon pg`
- After that, just run `npm start` and the server will start!!

##### Database
- The database used on this app was a postgreSQL one, so in order for the app to run properly, you will have to create a postgres database;
- That being said, to create the 'employees' table, you just need to run the employees migration using `npx knex migrate:latest` and to populate the database `npx knex seed:run`
