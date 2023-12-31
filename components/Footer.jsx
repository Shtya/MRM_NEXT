
import Link from "next/link"
import {useRouter} from "next/router"
import { Pattern9 } from './patterns/Pattern1'
import { Social_Media } from "@/pages/_app"
import { memo } from "react"

const Footer = memo(() => {
  const {pathname} = useRouter() ;

  return (
    <>
    <Pattern9  />
    <footer>
    <div className="bgCover" style={{zIndex:"1"}}  >  <img  src={"/bg/b1.jpg"} alt="footer" loading="lazy" /> </div>
      <div className="container" >

      <div className="top">
        <img src={"/Logo1.png"} alt="footer" loading="lazy" data-aos="fade-up" data-aos-delay="50" />
        <div className="phead" data-aos="fade-up" data-aos-delay="100">We Don't Create Ads ,We Build Successful Campaigns</div>
        <ul className='social last-social'>
          <li data-aos="fade-up" data-aos-delay="50">  <Link href={Social_Media[0]} target="_blank" className="Iicon"> <div className="style"> <i className="fa-brands fa-facebook-f"></i>    </div> </Link></li>
          <li data-aos="fade-up" data-aos-delay="70"> <Link href={Social_Media[1]} target="_blank" className="Iicon"> <div className="style"> <i className="fa-brands fa-instagram"></i></div> </Link></li>
          <li data-aos="fade-up" data-aos-delay="90"> <Link href={Social_Media[3]} target="_blank" className="Iicon"> <div className="style"><i className="fa-brands fa-whatsapp"></i>        </div> </Link></li>
          <li data-aos="fade-up" data-aos-delay="110"> <Link href={Social_Media[2]} target="_blank" className="Iicon"> <div className="style"> <i className="fa-brands fa-linkedin-in"></i></div> </Link></li>
        </ul>
      </div>

      <div className="center">
        <ul className='ul-1' data-aos="fade-up" data-aos-delay="120">
          <h2 className='h2 clip'>Contact INFO</h2>
          <li ><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li ><i className="fa-solid fa-map-location-dot"></i>  Business Bay - Dubai </li>
          <li ><i className="fa-solid fa-phone"></i>  +971561384496 </li>
        </ul>

        <ul className='ul-2' data-aos="fade-up" data-aos-delay="140">
          <h2 className='h2 clip'>Quick Links</h2>
          <li > <Link href="/contact-us"> contact us </Link></li>
          <li > <Link href="/about-us"> about us </Link></li>
          <li > <a href={pathname!= "/" ? "/#Services" : "#Services"}> services </a></li>
          <li > <Link href="/blog"> blog </Link></li>
        </ul>

        <ul className='ul-3' data-aos="fade-up" data-aos-delay="160" >
          <h2 className='h2 clip'>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <li className='newsletter'>Stay Informed and Inspired Subscribe to Our Newsletter for Exclusive Updates, Insights, and Offers</li>
          <div className="group">
            <input type="text" placeholder='Email Address' />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </ul>


      </div>

        <div className="bottom" data-aos="fade-up" data-aos-delay="0" data-aos-offset="0">
          <p className='p' >All rights reserved 2023 ©MRM Adevertising Agency</p>
          <div className="last" >
            <Link className='p' href="/terms">  terms </Link>
            <Link className='p' href="/privacy">  privacy </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
})

export default Footer