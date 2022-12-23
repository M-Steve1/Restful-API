# RESTful API with Postgres and Express

This project simply demostrate how to create a RESTful
API with Postgres and Express, transpiled from
typescript to javascript. This project also contain integration
testing done with jasmine.

## Intallation

`    $ npm install                      `

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

start script:

```
 "scripts": {
    "start": "nodemon src/server.ts"
 }
```

### Using Postman

##### Endpoints

- `articleRouter.get("/articles", showAll);`
- `articleRouter.post("/articles/create", createArticle);`
- `articleRouter.get("/articles/:id", findByID);`
- `articleRouter.delete("/articles/delete/:id", deleteArticle);`

#### Testing

- Update ENV variable in '.dot' file from 'env' to 'test'
- Setup database for testing and make sure it tallys with the one on source code
- Edit spec file(s) and variables for testing
- Testing scripts:

```
 "scripts": {
    "build": "npx tsc",
    "test_endpoint": "db-migrate --env test up && npm run build && jasmine",
    "test": "db-migrate --env test up && npm run build && jasmine && db-migrate db:drop article_test"
  },
```

#### Formatting

```
 "scripts": {
    "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write",
    "lint": "eslint src/**/*.ts",
 }
```
