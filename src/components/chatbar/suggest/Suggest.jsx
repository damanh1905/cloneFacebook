import React, { useEffect, useState } from "react";
import style from "./Suggest.module.scss";
import { FaRegWindowClose } from "react-icons/fa";
function Suggest() {

  const [randomImg, setRanmdomImg] = useState([
    {
      id: 0,
      imgUrl:
        "https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-hinh-nen-free-fire-ngau-nhat-800x450.jpg",
      name: "Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 1,
      imgUrl:
        "https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-hinh-nen-free-fire-ba-dao.jpg",
      name: "Top",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 2,
      imgUrl:
        "https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-hinh-nen-free-fire.jpg",
      name: "Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 3,
      imgUrl:
        "https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-hinh-nen-free-fire-cool-ngau-nhat.jpg",
      name: " Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
    {
      id: 4,
      imgUrl:
        "https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-hinh-nen-free-fire-chat.jpg",
      name: "Hien",
      describe: "property pariatur pariatur Unknown word.cSpell expected",
    },
  ]);
  // const [url, setUrl] = useState({
  //   id: url,
  // });
  // useEffect(() => {
  //   setTimeout(() => {
  //     let index = Math.trunc(Math.random() * randomImg.length);
  //     if (url.id !== index) {
  //       setUrl(randomImg[index].imgUrl);
  //     }else{
  //       index = Math.trunc(Math.random() * randomImg.length);
  //     }
  //   }, 2000);
  // });

  return (
    <div className={style.suggest}>
      <div className={style["suggest__header"]}>
        <span className={style["suggest__header-logo"]}>
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-hinh-nen-free-fire-ngau-nhat-800x450.jpg"
            alt="text"
            className={style["suggest__header-img"]}
          />
        </span>
        <span className={style["suggest__header-text"]}> Trò Chơi</span>
        <FaRegWindowClose className={style["suggest__header-close"]} />
      </div>
      <div className={style["suggest__body"]}>
        <div className={style["suggest__body-boximg"]}>
          <img src={randomImg[0].imgUrl} alt="img" className={style["suggest__body-img"]} />
        </div>
        <div className={style["suggest__body-text"]}>Siêu nhân vũ trụ</div>
      </div>
    </div>
  );
}

export default Suggest;
