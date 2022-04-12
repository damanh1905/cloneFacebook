import React from "react";
import style from "./Post.module.scss";
import Stories from "../post/stories";
import Create from "./create";
import ShowPost from "./showPost";
function Post() {
  return (
    <>
      
      <div className={style.main}>
        <div className={style["stories-item"]}>
          <Stories />
        </div>
        <div className={style.create}>
          <Create />
        </div>
        <div className={style.showPost}>
          <ShowPost />
        </div>
      </div>
    </>
  );
}

export default Post;
