'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import dummyImg from '../../../public/dummy.avif';
import { GoHeart } from "react-icons/go";
import SideFilter from './SideFilter';



export default function Card({ sidebar }) {

  const newStock = true;
  const outStock = true

  return (
    <div className="card-section" style={{display: 'flex'}}>
     {  sidebar && <SideFilter />}
    <section className="card">
      {Array(16).fill(null).map((item, index) => (
        <div className="card-container" key={index}>
          { newStock &&  <p className='new-stock'>NEW PRODUCT</p>}
          {outStock &&  <p className='out-stock'>OUT OF STOCK</p> }
          <Image 
            src={dummyImg} 
            alt="product_img" 
            className="card-img" 
          />
          <div className="card-content">
            <h3>PRODUCT NAME </h3>
            <p>
              <Link href="/signin">Sign in</Link> or Create an account to see pricing
            </p>
            <span className='heart'><GoHeart /></span>
          </div>
        </div>
      ))}
    </section>
    </div>
  );
}
