'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from "react-icons/io";


export default function SideFilter() {

  const [show, setShow] = useState(false)
  return (
    <section className='side-bar'>
        <ul className='side-bar-list'>
            <li className='side-bar-list-chek'><input type="checkbox"  />CUSTOMIZBLE</li>
            <li className='side-bar-list-item'> 
              <li onClick={() => setShow(prevShow => !prevShow)}> IDEAL FOR <span> {  show ? <IoIosArrowUp /> :   <IoIosArrowDown />}</span> </li>
                <small>All</small>
                {
                  show &&
                <ul className='show-list'>
                <li><Link className='link' href={"#"}>Unselect all</Link></li>
                <li><input type="checkbox" name="" id="" />Men</li>
                <li><input type="checkbox" name="" id="" />Women</li>
                <li><input type="checkbox" name="" id="" />Baby & Kids</li>
                </ul>
                }
              </li>

          
              
            <li className='side-bar-list-item'> OCCASION <span><IoIosArrowDown /></span><small>All</small></li>
            <li className='side-bar-list-item'> WORK<span><IoIosArrowDown /></span><small>All</small></li>
            <li className='side-bar-list-item'> FABRIC<span><IoIosArrowDown /></span><small>All</small></li>
            <li className='side-bar-list-item'> SEGMENT<span><IoIosArrowDown /></span><small>All</small></li>
            <li className='side-bar-list-item'> SUITABLE FOR<span><IoIosArrowDown /></span><small>All</small></li>
            <li className='side-bar-list-item'> RAW MATERIALS<span><IoIosArrowDown /></span><small>All</small></li>
            <li className='side-bar-list-item'> PATTERN<span><IoIosArrowDown /></span><small>All</small></li>
        </ul>
    </section>
  )
}
