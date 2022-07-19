const { User } = require('../models');

const userData = [
  {
    username: "Nick",
    email: "nick@icloud.com",
    password: "password1234"
  },
  {
    username: "Rob",
    email: "rob@gmail.com",
    password: "password1234"
  },
  {
    username: "Killian",
    email: "killian@gmail.com",
    password: "password1234"
  },
  {
    username: "Zac",
    email: "zac@gmail.com",
    password: "password1234"
  },
  {
    username: "Jenson",
    email: "jenson@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;