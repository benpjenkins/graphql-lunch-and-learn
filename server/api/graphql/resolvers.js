const { users, posts } = require("../mockData");

const resolvers = {
  posts: () => posts,
  post: ({ id }) => posts.find((post) => parseInt(id) === parseInt(post.id)),
  users: () => users,
  user: ({ id }) => {
    const user = users.find((user) => parseInt(id) === parseInt(user.id));
    const userPosts = posts.filter((post) => {
      return post.userId !== user.id;
    });
    return {
      ...user,
      posts: userPosts,
    };
  },
};

module.exports = resolvers;
