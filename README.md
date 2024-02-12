# My API Server

This is a simple API server implemented in TypeScript using Node.js and Express.

## Project Structure

- `src/server.ts`: This is the entry point of the application. It creates an instance of the Express application and sets up middleware and routes.
- `src/controllers/index.ts`: This file exports a class named `IndexController` that has a method `getIndex` to handle the root route of the application.
- `src/routes/index.ts`: This file exports a function named `setRoutes` that sets up routes for the application. It uses `IndexController` to handle the root route.
- `src/types/index.ts`: This file exports `Request` and `Response` interfaces that extend interfaces from the `express` library.
- `tsconfig.json`: This is the configuration file for TypeScript. It specifies compiler options and files to include in the compilation.
- `package.json`: This is the configuration file for npm. It lists the project's dependencies and scripts.

## Setup

1. Install dependencies: Run `npm install` in the project root directory.
2. Compile TypeScript: Run `npm run tsc` in the project root directory.
3. Start the server: Run `npm start` in the project root directory.

The server will start and listen for requests on `http://localhost:3000/`.

## API Endpoints

- `GET /`: Returns a welcome message.

Please refer to the individual files for more detailed documentation.