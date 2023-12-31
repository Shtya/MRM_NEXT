"use client" ;
import Animation  from './helpers/Animation'
import { useRouter } from "next/router"
import { memo } from "react";

const Who =memo(() => {
  const navigate = useRouter();

  return(
    <section className="Who search-edite " id='who' >
      <Animation />
      <div className="bgCover"  >  <img  src="/bg/b1.jpg" alt="who" loading="lazy" /> </div>
      <div className="container">

      <div className="Img " >
        <img data-aos="zoom-in" src={"/about-us/aboutus.png"} alt="Professionals collaborating in office, framed by letter-shaped windows" loading="lazy"  />
      </div>

      <div className="box" data-aos="zoom-in"  >
        <h1 className='h2 ' data-aos="zoom-in" >Your Partner for Advertising & Digital Marketing Success in Dubai</h1>
        <span className='p ' data-aos="zoom-in"  >We are a Dubai-based agency specialized in advertising, and digital marketing with years of experience. Our team delivers the highest level of service, combining creativity and strategic thinking for effective campaigns. Our values are dedication, excellence, and transparency. </span>
        <div className="info">
            <div className="box-child"  >
              <h2 className='h2 clip ' data-aos="zoom-in" ><i className="fa-solid fa-check"></i>Our mission</h2>
              <span className='p ' data-aos="zoom-in" >Our goal is to enable businesses and brands to succeed in marketing and digital solutions, using our expertise in advertising, branding, and innovative strategies to deliver outstanding results.</span>
            </div>
            <div className="box-child"  >
              <h2 className='h2 clip ' data-aos="zoom-in" ><i className="fa-solid fa-check"></i>Our vision</h2>
              <span className='p ' data-aos="zoom-in" >We aim to be a leading figure in the industry, dedicated to elevating work to the highest standards. Our goal is to inspire creativity and achieve remarkable results through innovative ideas.</span>
            </div>
        </div>

        <button onClick={_=> navigate.push("/about-us")} className='bt ' data-aos="zoom-in" >Find out more </button>
      </div>
      </div>
    </section>
  )
})

export default Who