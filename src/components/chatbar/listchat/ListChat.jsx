import React, { useState } from "react";
import style from "./ListChat.module.scss";
import { FaVideo, FaSistrix } from "react-icons/fa";
import user from "../../../image/21a1ed72-b4ad-41d2-b9be-0b480fb385ef.jpg";
function ListChat() {
  const [friendList, setFriendList] = useState([
    { id: 0, imgUrl: user, name: "Hiệp" },
    { id: 1, imgUrl: user, name: "Bế Lâm mai trường" },
    { id: 2, imgUrl: user, name: "An" },
    { id: 3, imgUrl: user, name: "Hiển" },
    { id: 4, imgUrl: user, name: "Anh" },
    { id: 5, imgUrl: user, name: "Bạn Bè" },
    { id: 6, imgUrl: user, name: "Bạn Bè" },
    { id: 7, imgUrl: user, name: "Bạn Bè" },
    { id: 8, imgUrl: user, name: "Bạn Bè" },
    { id: 9, imgUrl: user, name: "Bạn Bè" },
    { id: 10, imgUrl: user, name: "Bạn Bè" },
    { id: 11, imgUrl: user, name: "Bạn Bè" },
    { id: 12, imgUrl: user, name: "Bạn Bè" },
    { id: 13, imgUrl: user, name: "Bạn Bè" },
    { id: 14, imgUrl: user, name: "Bạn Bè" },
    { id: 15, imgUrl: user, name: "Bạn Bè" },
  ]);
  return (
    <div className={style.list}>
      <hr />
      <br />
      <div className={style["list__header"]}>Được Tài Trợ</div>
      <br />
      <hr />
      <div className={style["list__friend"]}>
        <div className={style["list__friend-content"]}>
          <div className={style["list__friend-text"]}>Người Liên Hệ</div>
          <div className={style["list__friend-icon"]}>
            <div className={style["show__header-dots"]}>
              <FaVideo className={style["list__friend-icon-video"]} />
            </div>
            <div className={style["show__header-dots"]}>
              <FaSistrix className={style["list__friend-search"]} />
            </div>
            <div className={style["show__header-dots"]}>
              <b className={style["show-dots"]}>...</b>
            </div>
          </div>
        </div>
        {friendList.map((friend) => (
          <div key={friend.id} className={style["list__friend-body"]}>
            <div className={style["list__friend-body-logo"]}>
              <img
                src={friend.imgUrl}
                alt="img"
                className={style["list__friend-body-logo-img"]}
              />
              <div className={style["list__friend-body-logo-status"]}>
                <div className={style["list__friend-body-logo-green"]}></div>
              </div>
            </div>
            <div className={style["list__friend-body-name"]}>
              <b>{friend.name}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListChat;
