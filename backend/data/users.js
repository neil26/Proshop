const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nilkanth Kulkarni",
    email: "Nilkanth.kulkarni4@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Neil ",
    email: "kulkarniNil315@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
