import React, { useState } from "react";
import axios from "axios";
function CreatePost() {
  const [title, setTitle] = useState("");
  const OnSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary ">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
