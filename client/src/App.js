import React from "react";
// import PostCreate from "./PostCreate";
import CreatePost from "./CreatePost";
import Postlist from "./Postlist";
const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />
      {/* <PostCreate /> */}
      <hr />
      <h1>Posts</h1>
      <Postlist />
    </div>
  );
};
export default App;
