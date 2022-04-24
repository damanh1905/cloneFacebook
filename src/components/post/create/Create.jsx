import React, { useRef, useState } from "react";
import style from "./Create.module.scss";
import user from "../../../image/21a1ed72-b4ad-41d2-b9be-0b480fb385ef.jpg";
import { FaVideo, FaFileImage, FaRegGrin, FaTrash } from "react-icons/fa";
// import Api from '../../../utils/api'
import axios  from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/features/PostSlice";
function Create() {
  const FACEBOOK_CLONE_ENDPOINT = "/addPost";
  const [imageToPost, setImageToPost] = useState(null);
  const hinddenFileInput = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    hinddenFileInput.current.click();
  };
  const addToImagePost = (e) => {
    e.preventDefault();
    const render = new FileReader();

    if (e.target.files[0]) {
      render.readAsDataURL(e.target.files[0]);
      render.onload = (e) => {
        setImageToPost(e.target.result);
        console.log(e.target.result);
      };
    }
  };
  const handleRemove = () => {
    setImageToPost(null);
  };
  const handleSubmit = (e) => {
    if(e.key === 'Enter'){
        const data = {
          post:inputRef.current.value,
          name:"Top",
          email:"aaaa",
          image:imageToPost,
          profilePic:"aaaa",
        };
        axios.post(FACEBOOK_CLONE_ENDPOINT,data,{
          Headers:{accept:"application/json"},
        }).then((response)=>{
          console.log(data);
          inputRef.current.value="";
          handleRemove();
          dispatch(addPost(response.data));
        }).catch((error)=>{
          console.log(error);
        })
    }
  };
  const valueInput = " Top ơi, bạn nghĩ gì thế?";
  return (
    <div className={style.create}>
      <div className={style["create__container"]}>
        <div className={style["create__container-top"]}>
          <div className={style["create__container-img"]}>
            <img src={user} alt="img" className={style["create-img"]} />
          </div>
          <input
            onKeyDown={handleSubmit}
            className={style["create__container-input"]}
            placeholder={valueInput}
            ref={inputRef}
          />
        </div>
        {/* <hr /> */}
        {imageToPost && (
          <div className={style["create__container-boximg"]}>
            <img
              src={imageToPost}
              alt="text"
              className={style["create__container-addimg"]}
            />
            <FaTrash
              className={style["create__container-trachimg"]}
              onClick={handleRemove}
            />
          </div>
        )}
        <div className={style["create__container-bottom"]}>
          <span className={style["create__container-section"]}>
            <FaVideo className={style["create__container-section-icon"]} />
            <span className={style["create__container-section-content"]}>
              Video trực tiếp
            </span>
          </span>
          <span
            onClick={handleClick} 
            className={style["create__container-section"]}
          >
            <FaFileImage
              className={style["create__container-section-icon"]}
              style={{ color: "green" }}
            />
            <span className={style["create__container-section-content"]}>
              Ảnh/video
            </span>
            <input
              ref={hinddenFileInput}
              onChange={addToImagePost}
              type="file"
              hidden
              className={style["create__container-section-input"]}
              accept="image/*"
            />
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
