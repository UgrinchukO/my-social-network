import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} value={p.value}/>)

    return (
        <div className={s.posts}>
            <div>
                <textarea></textarea>
                <button>add button</button>
            </div>
            <div className={s.item}>
                {postsElement}
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;
