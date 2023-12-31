"use client" ;
import IMG3 from "@/public/bg/b3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { memo, useEffect, useState } from "react";
import { Animate } from "@/pages/_app";
import Image from "next/image"

export default memo(function SliderGalleryIndoor ({header1 , typeOf , DATA , classHeader , classGallery , schema}) {

const handleChange = ()=> {
  settype(document.querySelectorAll(".Gallery2 .slick-current img")[0]?.dataset?.type?.split(" ")[0])
}

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  rows:2 ,
  autoplay:true,
  afterChange: handleChange ,
  responsive: [

    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots:false 
      }
    }
  ]
};

  const header =header1
  const [data , setdata] = useState([])
  const [type , settype] = useState(typeOf)
  useEffect(_=>{setdata(DATA)},[])

  const handleFilter = (ele) => {
    setdata(DATA.filter((e)=> e.type?.includes(ele)))
    settype(ele)
  }

  return (
    <div className={`GALLERY ${classGallery}`}>
        <div className="bgCover"  >  <Image  src={IMG3} alt="home" loading="lazy" /> </div>
        <div className="h1">OUR WORKS</div>
        {/* <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script> </Helmet> */}
        <ul className={`header1 header2 ${classHeader}`} data-aos={Animate} > 
          {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))} 
        </ul>

          <div className="container">
              <Slider  {...settings}    className="mySwiper" data-aos={Animate } >

                {data?.map((e,index)=>( 
                      <Image 
                      key={index} data-type={`${e.type}`}  
                      src={e.img}  loading='eager'  alt={e?.alt || e?.type}   />
                    )) }
              </Slider>
          </div>
    </div>
  )
})
