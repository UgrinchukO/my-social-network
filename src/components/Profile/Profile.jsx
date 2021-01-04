import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg"
          width="500px"
          height="350px"
          alt=""
        ></img>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <img
          src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
          width="300px"
          height="150px"
          alt=""
        ></img>
        <p>ava + description</p>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
