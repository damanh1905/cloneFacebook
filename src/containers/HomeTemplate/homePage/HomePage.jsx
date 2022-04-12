import React, { useEffect, useReducer, useState } from "react";
import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";
import ChatBar from "../../../components/chatbar";
import Post from "../../../components/post";
import style from "./Homepage.module.scss";

const init = (initisalState) => {
  return { count: initisalState };
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function HomePage({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount((count)=> count+1);
  //     console.log(count);
  //   },1000);
  //   console.log("ok")
  // },[count])
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
