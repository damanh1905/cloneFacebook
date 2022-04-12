import React from 'react'
import style from './ChatBar.module.scss'
import ListChat from './listchat/ListChat'
import Suggest from './suggest/Suggest'
export default function ChatBar() {
  return (
    <div className={style.chat}>
        <Suggest/>
        <ListChat/>
    </div>
  )
}
