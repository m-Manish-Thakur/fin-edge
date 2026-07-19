# FinEdge API

A production-ready RESTful backend for personal finance and expense tracking built with Node.js, Express, and MongoDB.

## Features

- User Registration
- JWT Authentication
- Transaction Management
- Budget Tracking
- Financial Summary
- Monthly Analytics
- AI-based Saving Suggestions
- Request Validation
- Rate Limiting
- Error Handling
- Unit Tests
- Modular MVC Architecture

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Express Validator
- Jest
- Supertest

## Project Structure

```
src/
controllers/
routes/
services/
models/
middleware/
utils/
validations/
cache/
config/
tests/
```

## Installation

```bash
git clone <repo>

cd finedge-api

npm install
```

Create a `.env` file.

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

JWT_EXPIRES_IN=7d
```

Run

```bash
npm run dev
```

## API Base URL

```
http://localhost:5000/api/v1
```

## Team Members

| Member   | Responsibility            |
| -------- | ------------------------- |
| Member 1 | User Authentication       |
| Member 2 | Transactions              |
| Member 3 | Middleware                |
| Member 4 | Analytics & Documentation |

## Deliverables

- Public GitHub Repository
- README
- Postman Collection
- Test Cases
