"use client" ;
import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';

import Animation from './helpers/Animation';

const Navbar1 = memo(() => {
  const Navigate = useRouter()

  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("up-anything") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[])
  useEffect(_=>{


let navLinks = document.querySelector(" .Navbar1 .nav-links");
let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".Navbar1 .htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
  } ,[])
  return (
  <div className="Navbar1" >
    <Animation />
    <nav>
      <div className={`navbar ${top}`} >
        <i className='bx bx-menu'></i>
        <div data-aos="fade-down" data-aos-delay="100" className="logo"><Link href="/"> <img src={"/Logo1.png"} alt="Navbar" loading="lazy" /></Link></div>
        <div className="nav-links">
          <div className="sidebar-logo">   <span className="logo-name"><img src={"/Logo1.png"} alt="Navbar" loading="lazy" /></span>   <i className='bx bx-x' ></i> </div>
          
          <ul className="links">
            <li data-aos="fade-down" data-aos-delay="200" onClick={_=> Navigate.push("/")}><Link href="/">Home</Link></li>
            <li data-aos="fade-down" data-aos-delay="300" ><Link href=""  >Services</Link>
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li onClick={_=> Navigate.push("/web-development-company-in-dubai")}><Link href="/web-development-company-in-dubai"> web design & Development </Link></li>
                <li onClick={_=> Navigate.push("/Photography-In-Dubai")}><Link href="/Photography-In-Dubai"> photography & videography </Link></li>
                <li onClick={_=> Navigate.push("/exhibition-and-display-stand-agency-in-dubai")}><Link href="/exhibition-and-display-stand-agency-in-dubai"> exhibition & display stands</Link></li>
                <li onClick={_=> Navigate.push("/indoor-and-outdoor-signages-agency-in-dubai")}><Link href="/indoor-and-outdoor-signages-agency-in-dubai"> indoor & outdoor signages </Link></li>
                <li onClick={_=> Navigate.push("/social-media-marketing-agency-in-dubai")}><Link href="/social-media-marketing-agency-in-dubai"> social media marketing</Link></li>
                <li onClick={_=> Navigate.push("/Corporate-gifts-in-dubai")}><Link href="/Corporate-gifts-in-dubai">Corporate gifts </Link></li>
                <li onClick={_=> Navigate.push("/advertising-ppc-agency-in-dubai")}><Link href="/advertising-ppc-agency-in-dubai">media buying </Link></li>
                <li onClick={_=> Navigate.push("/branding-agency-in-dubai")}><Link href="/branding-agency-in-dubai">Branding </Link></li>
                <li onClick={_=> Navigate.push("/seo-agency-in-dubai")}><Link href="/seo-agency-in-dubai">SEO </Link></li>
              </ul>
            </li>

            <li data-aos="fade-down" data-aos-delay="400" onClick={_=> Navigate.push("/blog")}><Link href="/blog">Blog</Link></li>
            <li data-aos="fade-down" data-aos-delay="500" onClick={_=> Navigate.push("/about-us")}><Link href="/about-us">About Us</Link></li>
            <li data-aos="fade-down" data-aos-delay="600" onClick={_=> Navigate.push("/contact-us")}><Link href="/contact-us"> Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
})

export default Navbar1