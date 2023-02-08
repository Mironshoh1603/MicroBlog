const express = require("express");

const { randomBytes } = require("crypto");
const app = express();
app.use(express.json());

const port = 3000;

const posts = {};
app.get("/post", (req, res) => res.send(posts));
app.post("/post", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
