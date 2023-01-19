# RESTful API with Postgres and Express

This project simply demonstrates how to create a RESTful
API with Postgres and Express, transpiled from
typescript to javascript. This project also contain integration
testing done with jasmine.

## Intallation

`$ npm install                  `

## Usage

- Setup your .env file using the .env.example template file.
- Create a database.json file

```
// database.json
{
    "dev": {
        "driver": "pg",
        "user": "YOUR USERNAME",
        "password": "YOUR PASSWORD",
        "host": "YOUR HOST",
        "database": "YOUR DATABASE FOR DEVELOPMENT"
    },

    "test": {
        "driver": "pg",
        "user": "YOUR USERNAME",
        "password": "YOUR PASSWORD",
        "host": "YOUR HOST",
        "database": "YOUR DATABASE FOR TESTING"
    }
}
```

- Using psql create a test and env database.
- Create table `db-migrate up`
- Drop table `db-migrate down`

#### Development

- Setup database for development and make sure it tallys with the one on source code

start script:

```
 "scripts": {
    "start": "nodemon src/server.ts"
 }
```

#### Testing

- Setup database for testing and make sure it tally with the one on source code
- Testing scripts:

```
 "scripts": {
    "build": "npx tsc",
    "test": "set ENV=test && db-migrate --env test up && npm run build && jasmine"
  },
```

## API Endpoints

- `articleRouter.get("/articles", showAll);`
- `articleRouter.post("/articles/create", createArticle);`
- `articleRouter.get("/articles/:id", findByID);`
- `articleRouter.delete("/articles/delete/:id", deleteArticle);`

## Data Shapes

#### Articles

- id SERIAL PRIMARY KEY
- title VARCHAR
- content text

#### Formatting

```
 "scripts": {
    "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write",
    "lint": "eslint src/**/*.ts",
 }
```
