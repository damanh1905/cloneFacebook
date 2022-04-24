import React, { useEffect, useState } from "react";
import style from "./ShowPost.module.scss";
import user from "../../../image/21a1ed72-b4ad-41d2-b9be-0b480fb385ef.jpg";
import { FaThumbsUp, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectPost } from "../../../redux/features/PostSlice";
function ShowPost() {
  // const dispatch = useDispatch();
  const post = useSelector(selectPost);
  // console.log(post);
  const [posts,setPosts] = useState([]);
useEffect(()=>{
  (async ()=>{
    let result = await axios.get("/getListPost",{
      headers:{accept :"application/json"},
    })
    setPosts(result.data.reverse());
  })();
console.log("render");
},[post])

  return (
    <>
      {posts.map((post) => (
        <div key={post.postID} className={style.show}>
          <div className={style["show__header"]}>
            <div className={style["show__header-img"]}>
              <img
                src={user}
                alt="img"
                className={style["show__header-img-user"]}
              />
            </div>
            <div className={style["show__header-name"]}>
              <span className={style["show__header-fullname"]}>
                <b> {post.name} </b>
                <span className={style["show__header-day"]}>2 giờ </span>
              </span>
            </div>
            <div className={style["show__header-dots"]}>
              <b className={style["show-dots"]}>...</b>
            </div>
          </div>
          <div className={style["show__body"]}>
            <div className={style["show__body-text"]}>
            {post.post}
            </div>
            {post.image && (
              <div className={style["show__body-img"]}>
                <img
                  src={post.image}
                  alt="img"
                  className={style["show__body-bottom-img"]}
                />
              </div>
            )}
          </div>
          <br />

          <hr />
          <div className={style["show__reaction"]}>
            <span className={style["show__reaction-section"]}>
              <FaThumbsUp className={style["show__reaction-section-icon"]} />
              <span className={style["show__reaction-section-content"]}>
                Thích
              </span>
            </span>
            <span className={style["show__reaction-section"]}>
              <FaCommentAlt className={style["show__reaction-section-icon"]} />
              <span className={style["show__reaction-section-content"]}>
                Bình luận
              </span>
            </span>
            <span className={style["show__reaction-section"]}>
              <FaShareAlt className={style["show__reaction-section-icon"]} />
              <span className={style["show__reaction-section-content"]}>
                Chia sẻ
              </span>
            </span>
          </div>
          <br />

          <hr />
        </div>
      ))}
    </>
  );
}

export default ShowPost;
