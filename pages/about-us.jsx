"use client" ;
import ImgIntro from "@/public/about-us/intro.jpg"
import ImgBox1 from "@/public/about-us/mission.jpg"
import ImgBox2 from "@/public/about-us/vision.jpg"
import ImgContact from "@/public/about-us/contact.jpg"
import Navbar from '../components/Navbar'
import OneWhy from '../components/OneWhy'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import { Divider } from '../components/patterns/Pattern1'
import IMG2 from "@/public/bg/b2.jpg"
import IMG1 from "@/public/bg/b2.jpg"
import MetaTag from "@/components/MetaTag";
import { memo } from "react";
import Image from "next/image"


const AboutUs = memo(() => {
  const vission_mission = [ 
    {title:"Our Vision",   alt:"Golden 'VISION' text on a dark reflective grid    " , img:ImgBox1 , desc :"Our goal is to become one of the leading figures in the industry, known for our excellence. We are dedicated to being the preferred choice for individuals and businesses aiming to elevate their work to the highest standards. Ultimately, we aim to be a primary source of original and creative ideas, providing a pathway to unlock creativity and achieve remarkable results."} ,
    {title:"Our Mission" , alt:"Shiny 'MISSION' text on a stark grid backdrop." , img:ImgBox2 , desc :"Our mission is to empower businesses and brands to succeed in the constantly evolving realms of marketing and digital solutions. We are committed to delivering outstanding outcomes by leveraging our knowledge in advertising, branding, and innovative strategies."} ,
  ]
  return (
    <div className='about-us'>
      <MetaTag canonical="about-us"  title="Best Advertising & Digital Marketing Company in Dubai " desc="Best Advertising and Digital Marketing company in Dubai, helping Businesses achieve success and growth by offering Full Marketing services" />
      {/* <Helmet > <script type="application/ld+json">{`  "@context": "https://schema.org",  "@type": "ContactPage",  "name": "mrm advertising",  "url": "https://mrmadvertisingdubai.com/about-us",  "description": "Best Advertising and Digital Marketing company in Dubai, helping Businesses achieve success and growth by offering Full Marketing services",  "address": {    "@type": "PostalAddress",    "streetAddress": "123 Street Name",    "addressLocality": "dubai",    "addressRegion": "State",    "postalCode": "0000",    "addressCountry": "dubai"  },  "contactPoint": {    "@type": "ContactPoint",    "telephone": "+971561384496",    "contactType": "customer service",    "areaServed": "US" }`}</script> </Helmet> */}
      <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro hidden-img"> <Image  src={ImgIntro} alt="intro page contains word 'about us '" fill={true}  /></div>

        <Divider classn=" divider-top " />
        <div className="searching ">
        <div className="bgCover"> <Image  fill={true}  src={"/bg/b2.jpg"} alt="about" loading="lazy" /> </div>
          <div className="container">
            <div className="coverImg " data-aos="fade-right"> <Image fill={true}  src={ImgContact} alt="about" loading="lazy" /> </div>
            <div className="boxs ">
                <h2 className='box p ' data-aos="fade-left">We are a global creative agency based in the UAE and a leading agency in advertising, marketing, and digital solutions. Our expertise is helping companies establish a strong and professional presence in physical and digital spaces using innovative and effective strategies.</h2>
                <h2 className='box p ' data-aos="fade-left">We create exceptional visual identities and build robust online presences for brands. Our team is dedicated to delivering top-notch services, utilizing the latest technologies and top-notch solutions to achieve tangible results. We offer professional marketing services to help your brand shine, from visual identities to online experiences. </h2>
            </div>
          </div>
        </div>

        <Divider classn="divider" />
        <div className="WHY">
          <div className="bgCover"> <Image  fill={true}  src={"/bg/b2.jpg"} alt="about" loading="lazy" /> </div>
          <div className="container" data-aos="fade-up">
            {vission_mission.map((e,index)=> (
                <OneWhy altCover={e.alt} key={index} img={e.img} title={e.title} desc={e.desc} />
              ))}
        </div>
        </div>

      <Footer />
    </div>
  )
})

export default AboutUs