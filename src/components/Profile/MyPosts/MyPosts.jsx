import React from "react";
import s from "./MyPosts.module.css";
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div>
        <textarea></textarea>
        <button>add button</button>
      </div>
      <div className={s.item}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
