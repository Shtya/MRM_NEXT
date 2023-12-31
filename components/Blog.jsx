"use client" ;
import { memo, useEffect, useState } from 'react'
import Slider_1_Img from './Slide/Slider_1_Img';
import baseURL from '@/server/API/API';
import {useRouter } from "next/router"

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  // autoplay:true ,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots: false,
      }
    }
  ]
};

// const push = usepush()

const Blog = memo(() => {
  const {pathname , push} = useRouter();

  const [blogs , setdata] = useState([])
  useEffect(_=> { 
    blogs.length < 1 
    ?  baseURL.get("").then(e => setdata(e.data.data))
    :  baseURL.get("").then(e => setdata(e.data.data))
   } ,[pathname])

  useEffect(_=> { 
    blogs.length < 1 
    ?  baseURL.get("").then(e => setdata(e.data.data))
    :  baseURL.get("").then(e => setdata(e.data.data))
   } ,[])



  return (
    <section className='blog' id='Blog'>
      
      <div className="bgCover"  >  <img  src={"/bg/b3.jpg"} alt="blog" loading="lazy" /> </div>
      <div className="container"> <div className="h1"onClick={_=> push("/blog")} style={{cursor:'pointer'}} data-aos="fade-up" >BLOG</div> </div>
      <p className="phead" data-aos="fade-up"  >Latest Insights and News to Keep Your Strategies Alive </p>

      <Slider_1_Img  data={blogs} settings={settings} />

    </section>
  )
})

export default Blog
