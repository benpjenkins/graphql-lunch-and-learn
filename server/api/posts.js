const router = require("express").Router();
const { posts } = require("./mockData");

router.get("/", (req, res) => {
  res.json(posts);
});

router.get("/:id", (req, res) => {
  res.json(posts.find((post) => req.params.id === post.id));
});

module.exports = router;
