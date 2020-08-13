# graphql-lunch-and-learn

## Introduction

This project contains a simple express server with both REST and GraphQL endpoints for two simple types of data. It is part of a lunch and learn intended solely as an introduction to GraphQL, partly by highlighting the difference between these two API types. It is not intended to be a reference guide or follow all best practices.

## Setup

After cloning this repository first run `yarn` or `npm install` to install dependencies. Next you can use `yarn start` or `npm run start` to start the server. Some example Postman requests are pre-configured in the collection below. You can also use the [GraphiQL tool](http://localhost:1337/api/graphql) to explore the GraphQL endpoint of the API.

## Postman Collection

This [Postman Collection](https://www.getpostman.com/collections/19e1ac2603c18847b1d3) includes two types of requests in both REST and GraphQL to demonstrate some of the differences.

## Project Dependencies

- express: A web framework for node.js
- express-graphql: Creates a GraphQL HTTP server.
- faker: Easily generates mock data.
- graphql: The Javascript reference implementation of GraphQL.
- morgan: Logs requests to the shell.
- nodemon: Automatically restarts server when files change.

## Further Reading

- [GraphQL Documentation](https://graphql.org/)
- [How to GraphQL - Front and Back end tutorials in many languages.](https://www.howtographql.com/)
- [Apollo GraphQL - Fullstack Javascript GraphQL Platform](https://www.apollographql.com/)
