"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TiTick } from "react-icons/ti";


export default function Dropdown() {
  const [dorop, setDrop] = useState('RECOMMENDED');
  const [showDrop, setShowDrop] = useState(false)
  return (
    <section className="drop-list"  onClick={() => setShowDrop(prevShowDrop => !prevShowDrop)}>
      <h4>{dorop }  { showDrop ? <IoIosArrowUp /> :   <IoIosArrowDown /> }</h4>
      {
       showDrop ?
        <ul className="drop-list-item">
        <li className="drop-list-item-1" > <span><TiTick /></span> RECOMMENDED</li>
        <li >NEWEST FIRST</li>
        <li >POPULAR</li>
        <li >PRICE: HIGH TO LOW</li>
        <li >PRICE: LOW TO HIGH</li>
      </ul>
      : null
      }
    </section>
  );
}
