import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
function Postlist() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    let res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  useEffect(() => fetchPosts(), []);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex justify-content-between flex-row flex-wrap">
      {renderedPosts}
    </div>
  );
}

export default Postlist;
