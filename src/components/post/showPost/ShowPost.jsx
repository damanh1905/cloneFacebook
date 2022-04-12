import React, { useState } from "react";
import style from "./ShowPost.module.scss";
import user from "../../../image/21a1ed72-b4ad-41d2-b9be-0b480fb385ef.jpg";
import user2 from "../../../image/12698945_457969794394586_106116745_o.jpg";
import { FaThumbsUp, FaCommentAlt, FaShareAlt } from "react-icons/fa";
function ShowPost() {
  const [show, setShow] = useState([
    {
      id: 0,
      imgUrl: user2,
      name: "Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 1,
      imgUrl: user,
      name: "Top",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 2,
      imgUrl: user2,
      name: "Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 3,
      imgUrl: user,
      name: " Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 4,
      imgUrl: user,
      name: "Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
  ]);
  return (
    <>
    {show.map((show)=>(
    <div key={show.id} className={style.show}>
    
        
          <div className={style["show__header"]}>
        <div className={style["show__header-img"]}>
          <img
            src={show.imgUrl}
            alt="img"
            className={style["show__header-img-user"]}
          />
        </div>
        <div className={style["show__header-name"]}>
          <span className={style["show__header-fullname"]}>
            <b> {show.name} </b>
            <span className={style["show__header-day"]}>2 giờ</span>
          </span>
        </div>
        <div className={style["show__header-dots"]}>
          <b className={style["show-dots"]}>...</b>
        </div>
      </div>
      <div className={style["show__body"]}>
        <div className={style["show__body-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          pariatur, dolores facere est nulla quod cumque corporis ab suscipit
          illum maxime harum, non sed, velit minima animi. Deleniti, quasi
          inventore.
        </div>
        <div className={style["show__body-img"]}>
          <img
            src={show.imgUrl}
            alt="img"
            className={style["show__body-bottom-img"]}
          />
        </div>
      </div>
      <br />

      <hr />
      <div className={style["show__reaction"]}>
        <span className={style["show__reaction-section"]}>
          <FaThumbsUp className={style["show__reaction-section-icon"]} />
          <span className={style["show__reaction-section-content"]}>Thích</span>
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
