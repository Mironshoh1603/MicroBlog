const express = require("express");
const { randomBytes } = require("crypto");
const app = express();
app.use(express.json());

const port = 3001;
const commentByPostId = {};
app.get("/post/:id/comment", (req, res) => {
  res.status(200).send(commentByPostId[req.params.id]);
});
app.post("/post/:id/comment", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comment = commentByPostId[req.params.id] || [];
  comment.push({ id: commentId, content: content });
  commentByPostId[req.params.id] = comment;
  res.status(201).send(comment);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
