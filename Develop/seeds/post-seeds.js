const { Post } = require("../models");

  const postData = [
    {
      title: "Games",
      post_text:
        "Are you excited for the new Call of Duty?",
      user_id: 1,
    },
    {
      title: "Vanilla JavaScript",
      post_text: "I miss vanilla JavaScript",
      user_id: 1,
    },
    {
      title: "React",
      post_text:
        "I'm excited to learn React. I'm also excited to learn Redux.",
    },
    {
      title: "Node.js",
      post_text:
        "Learning node.js is a great way to learn how to build a server.",
      user_id: 5,
    },
  ];
  
  const seedPosts = () => Post.bulkCreate(postData);
  
  module.exports = seedPosts;