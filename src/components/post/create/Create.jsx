import React from "react";
import style from "./Create.module.scss";
import user from "../../../image/21a1ed72-b4ad-41d2-b9be-0b480fb385ef.jpg";
import { FaVideo, FaFileImage, FaRegGrin } from "react-icons/fa";

function Create() {
  const valueInput = " Top ơi, bạn nghĩ gì thế?";
  return (
    <div className={style.create}>
      <div className={style["create__container"]}>
        <div className={style["create__container-top"]}>
          <div className={style["create__container-img"]}>
            <img src={user} alt="img" className={style["create-img"]} />
          </div>
          <input
            className={style["create__container-input"]}
            placeholder={valueInput}
          />
        </div>
        <hr />
        <div className={style["create__container-bottom"]}>
          <span className={style["create__container-section"]}>
            <FaVideo className={style["create__container-section-icon"]} />
            <span className={style["create__container-section-content"]}>
              Video trực tiếp
            </span>
          </span>
          <span className={style["create__container-section"]}>
            <FaFileImage
              className={style["create__container-section-icon"]}
              style={{ color: "green" }}
            />
            <span className={style["create__container-section-content"]}>
              Ảnh/video
            </span>
          </span>
          <span className={style["create__container-section"]}>
            <FaRegGrin
              className={style["create__container-section-icon"]}
              style={{ color: "#f8f525" }}
            />
            <span className={style["create__container-section-content"]}>
              Cảm xúc/Hoạt Động
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Create;
