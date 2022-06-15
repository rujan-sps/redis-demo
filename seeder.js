const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};
connectDB()
const User = require('./models/User')
const fs = require('fs')
const Quote = require('./models/Quote')


const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);

const quotes = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/quotes.json`, 'utf-8')
);


const importData = async() => {
  try {
    const Users = await User.create(users)
    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
}
const importDataQuotes = async() => {
  try {
    const Quotes = await Quote.create(quotes)
    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
}



if (process.argv[2] === '-user') {
  importData();
} else if (process.argv[2] === '-quote') {
  importDataQuotes();
}

// commands 
// node seeder.js -user to import user data
// node seeder.js -quote to import quotes data

