import React from 'react'
import style from "./TitleBar.module.css"

export default function TitleBar() {
  return (
    <div className={style.main}>
       <img className={style.img} src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" />
       <span style={{marginLeft:"30px"}}>GOOGLE Document</span>
    </div>
  )
}