const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");
const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

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
