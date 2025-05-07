# Chat API

A RESTful Chat API built with **Node.js**, **Express.js**, and **MongoDB** using **JWT authentication**. This API allows users to register, log in, and exchange messages securely.

## Features

- User Registration & Login (with hashed passwords using bcrypt)
- JWT-based Authentication
- Send and Retrieve Messages
- Basic Security using Helmet
- Rate Limiting using express-rate-limit
- Logging with Morgan
- MongoDB Integration via Mongoose

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcrypt
- Helmet
- express-rate-limit
- Morgan

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally or MongoDB Atlas connection string

### Installation

```bash
git clone https://github.com/SmitaAmrutkar/chat-api.git
cd chat-api
npm install
