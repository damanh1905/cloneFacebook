import React from "react";
import style from "./Navbar.module.scss";
import user from "../../image/182615065_299724255219495_4657136340236375007_n.png";
import {
  FaFacebook,
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style["navbar__first"]}>
        <div className={style["navbar__first-logo"]}>
          <FaFacebook className={style["navbar-logo"]} />
        </div>
        <div className={style["navbar__first-search"]}>
          <input
            type="text"
            className={style["navbar__first-searchbar"]}
            placeholder="Tìm kiếm trên Facebook"
          />
          <FaSistrix className={style["navbar__searchIcon"]} />
        </div>
      </div>
      <div className={style["navbar__middle"]}>
        <span className={style["navbarmiddle"]}>
          <FaHome className={style["navbar__middle-icon"]} />
        </span>
        <span className={style["navbarmiddle"]}>
          <FaFontAwesomeFlag className={style["navbar__middle-icon"]} />
          <span className={style["navbar__notify"]}>3</span>
        </span>
        <span className={style["navbarmiddle"]}>
          <FaVideo className={style["navbar__middle-icon"]} />
          <span className={style["navbar__notify"]}>9+</span>
        </span>
        <span className={style["navbarmiddle"]}>
          <FaUsers className={style["navbar__middle-icon"]} />
          <span className={style["navbar__notify"]}>6</span>
        </span>
        <span className={style["navbarmiddle"]}>
          <FaGamepad className={style["navbar__middle-icon"]} />
          <span className={style["navbar__notify"]}>4</span>
        </span>
      </div>
      <div className={style["navbar__last"]}>
        <span className={style["navbar__last-section-img"]}>
          <img
            src={user}
            alt="user"
            className={style["navbar__last-icon-img"]}
          ></img>
          <b className={style["navbar__last-user"]}>hien</b>
        </span>
        <span className={style["navbar__last-section"]}>
          <FaPlus className={style["navbar__last-icon"]} />
        </span>
        <span className={style["navbar__last-section"]}>
          <FaFacebookMessenger className={style["navbar__last-icon"]} />
        </span>
        <span className={style["navbar__last-section"]}>
          <FaBell className={style["navbar__last-icon"]} />
        </span>
        <span className={style["navbar__last-section"]}>
          <FaCaretDown className={style["navbar__last-icon"]} />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
