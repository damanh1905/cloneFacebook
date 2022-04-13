import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";
import ChatBar from "../../../components/chatbar";
import Post from "../../../components/post";
import style from "./Homepage.module.scss";


function HomePage() {
  
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.center}>
        <Sidebar />
        <Post />
        <ChatBar/>
      </div>
      
    </div>
  );
}

export default HomePage;
