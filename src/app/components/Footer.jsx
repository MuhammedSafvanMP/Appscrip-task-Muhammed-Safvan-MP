'use client'


import React from 'react'
import Image from "next/image";
import country from "../../../public/country.png";
import daimand from "../../../public/daimnd.png";
import payment from "../../../public/payment.png";
import social from "../../../public/social.png";





export default function Footer() {
  return (
    <footer  className='footer'>
        <section className='footer-section-1'>
            
             <div className='footer-section-container-1'>
                  <h2>BE THE FIRST TO KNOW</h2>
                  <p className='desk'>Sign up for updates from metta muse</p>
                  <p className='phone'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                  <div className='footer-sub'>
                      <input type="text"  placeholder='Enter your e-mail...'/>
                      <button>SUBCIRBE</button>
                  </div>
             </div>

             <div className='footer-section-container-2'>
                  <div className='footer-contact'>

                  <h2 className='phon-hide'>CONTACT US</h2>
                  <h2 >CALL US</h2>
                  <div className='contact'>
                  <p>+44221335360</p>
                  <Image src={daimand} alt="daimand_logo" />
                  <p>customercare@mettamuse.com</p>
                  </div>
                   </div>
                  <div className='footer-cont'>
                  <h2>CURRENCY</h2>
                    <div>
                    <Image  width={30} src={country} alt="country_logo" />
                    <Image src={daimand} alt="daimand_logo" />
                    <h4>USD</h4>
                    </div>
                    <p className='phon-hide'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                  </div>
             </div>

        </section>

        <section className='footer-section-2'>
            <div className='footer-section-container-3'>
                <ul>
                  <li className='padd'><h1>metta muse</h1></li>
                  <li className='phon-hide'>About Us</li>
                  <li className='phon-hide'>Stories</li>
                  <li className='phon-hide'>Artisans</li>
                  <li className='phon-hide'>Boutiques</li>
                  <li className='phon-hide'>Contact Us</li>
                  <li className='phon-hide'>EU Complliances Docs</li>
                </ul>
            </div>

            <div className='footer-section-container-4'>
               <ul>
                 <li className='padd'><h1>QUICK LINKS</h1></li>
                 <li className='phon-hide'>Orders & Shopping</li>
                 <li className='phon-hide'>Join/Login as a Seller</li>
                 <li className='phon-hide'>Payment & Pricing</li>
                 <li className='phon-hide'>Return & Refunds</li>
                 <li className='phon-hide'>FAQs</li>
                 <li className='phon-hide'>Privacy Policy</li>
                 <li className='phon-hide'>Terms & Conditions</li>
               </ul>
            </div>

            <div className='footer-section-container-5'>
                <ul className='line'>
                  <li className='padd'><h1>FOLLOW US</h1></li>
                  <li className='phon-hide'><Image width={55} src={social} /></li>
                </ul>
                <ul>
                   <li>metta muse ACCEPTS</li>
                   <li>
                      <Image  className='image' width={500} src={payment} />
                   </li>
                </ul>
            </div>

        </section>

        <footer className='bottom-footer'>Copyright © 2023 mettamuse. All rights reserved.</footer>
    </footer>
  )
}
