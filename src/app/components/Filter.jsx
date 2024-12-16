'use client'

import Link from 'next/link';
import React from 'react'
import Dropdown from './Dropdown'
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";



const item = 3425;

export default function Filter({ setSidebar }) {
  return (
    <section className='filter-section'>
            <ul className='filter-list'>
              <div className='filter-list-group'>
                <li className='filter-list-group-item1'>{item}ITEMS</li>
                <li onClick={() => setSidebar(prevSidebar => !prevSidebar) } className='filter-list-group-item2 link'> <FaAngleLeft /> <Link  className='link' href={'#'}> <span>HIDE</span> FILTER</Link></li>
              </div>
              <hr />
                <li className='drop'><Dropdown />  </li>
            </ul>
    </section>
  )
}
