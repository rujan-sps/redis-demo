const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const {connectRedis} = require("./config/redisClient");


// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Connect to redis
connectRedis()

// Route files
const users = require('./routes/users');
const quotes = require('./routes/quotes');

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/v1/users', users);
app.use('/api/v1/quotes', quotes);

const port = process.env.PORT || 5050;

const server = app.listen(
  port,
  console.log(`Server is listening on port ${port}`)
);
