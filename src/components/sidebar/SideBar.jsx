import React, { useState } from "react";
import style from "./Sidebar.module.scss";
import user from "../../image/182615065_299724255219495_4657136340236375007_n.png";
function SideBar() {
  const [userList, setUserList] = useState([
    { id: 0, imgUrl: user, name: "Bạn Bè" },
    { id: 1, imgUrl: user, name: "Bạn Bè" },
    { id: 2, imgUrl: user, name: "Bạn Bè" },
    { id: 3, imgUrl: user, name: "Bạn Bè" },
    { id: 4, imgUrl: user, name: "Bạn Bè" },
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
    <div className={style.side}>
      {userList.map((info) => (
        <div key={info.id} className={style["side__list"]}>
          <div className={style["side__list-img"]}>
            <img
              src={info.imgUrl}
              alt="img"
              className={style["side-img"]}
            ></img>
          </div>
          <div className={style["side__list-name"]}>
            <b>{info.name}</b>
          </div>
        </div>
      ))}

    </div>
  );
}

export default SideBar;
