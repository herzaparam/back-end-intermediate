<h1 align="center">Tickitz API</h1>

an API ticketing movie which can book cinema seat by choosing the film, schedule, and the location which you preferred. 
Tickitz API, includes JWT, multer, and redis. registering login with otentication, authorization, and hashing password.

## Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
### Modules and Packages
- nodemon
- morgan
- cors
- dotenv
- express
- mysql2
- http-error
- standardjs

## Getting Started
### Prerequisites
[node.js](https://nodejs.org/en/download/)
[Postman](https://www.getpostman.com/) for testing
[Database](database-example.sql)

### Installing

Clone this repository and then use the package manager npm to install dependencies.
```
npm install
```
## Setup .env example

Create .env file in your root project folder.

```env

PORT="your port"
DB_HOST = localhost
DB_USER = root
DB_NAME = "your database name"
SECRET_KEY = "your secret key"
USER_EMAIL = "your email"
PASSWORD_EMAIL = "your email's password"

```
## Run the app

Development mode

```bash
npm run dev
```

Deploy mode

```bash
npm start
```

## REST API

[![run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/14783281/TzRVe6SL)


## Front end Repositories
also you can check our front end repositories [here](https://github.com/herzaparam/React-Tickitz)

### Contributor
[Herza Paramayudhanto](https://github.com/herzaparam)

contact :
herzaparam@gmail.com
