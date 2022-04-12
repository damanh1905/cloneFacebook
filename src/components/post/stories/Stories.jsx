import React,{useState} from 'react'
import style from './Stories.module.scss'
import user from '../../../image/21a1ed72-b4ad-41d2-b9be-0b480fb385ef.jpg'
import user2 from '../../../image/12698945_457969794394586_106116745_o.jpg'

export default function Stories() {
  const [stories,setStories] = useState([
    {id:0,imgUrl:user2,name:"hien"},
    {id:1,imgUrl:user,name:"top"},
    {id:2,imgUrl:user2,name:"hien"},
    {id:3,imgUrl:user,name:" hien"},
    // {id:4,imgUrl:user,name:"hien"},
   
    
])
  return (
    <div className={style.stories}>
       <div className={style['stories__body']}>
              <img src={user} alt="img"  className={style['stories__img']} />
  
              <div className={style['stories__body-overlay']}>
                  <div className={style['stories__body-overlay-img']}>
                  <img src={user} alt="img"  className={style['stories__overlay-img']} />
  
                  </div>
                  </div>
                 <div className={style['stories__body-overlay-name']}>anh</div>
              </div>
           {stories.map((sto)=>(
              <div key={sto.id} className={style['stories__body']}>
              <img src={sto.imgUrl} alt="img"  className={style['stories__img']} />
  
              <div className={style['stories__body-overlay']}>
                  <div className={style['stories__body-overlay-img']}>
                  <img src={sto.imgUrl} alt="img"  className={style['stories__overlay-img']} />
  
                  </div>
                  </div>
                 <div className={style['stories__body-overlay-name']}>{sto.name}</div>
              </div>
           ))}

    </div>
  )
}
