import React from "react";
import style from "./NavBar.module.css";

export default function TitleBar() {
  return (
    <div className={style.main}>
      <img
        className={style.img}
        src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
      />
      <div className={style.TitleBar}>
        <span style={{ marginLeft: "30px" }}>Google Document </span>
        <div className={style.list}>
          <li> Files</li>
          <li> Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Extensions</li>
          <li>Help</li>
        </div>
      </div>
    </div>
  );
}
