const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This is the first comment!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "I spent 4 days on this homework trying to fix an issue that ended up being the misspelling of layouts",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "This was probably the hardest homework yet",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;