"use client" ;
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useRouter } from "next/router";
import Moment from 'react-moment';
import Skeleton from '../Skeleton';

const OneBlog = ({classn ,blogs , settings , name , onHere }) => {
  const {push} = useRouter() 

  return (
    <div className={`Slider_1_Img ${classn}`}>
      {onHere ? <div className="bgCover"  >  <img  src={"/bg/b3.jpg"} alt="blog" loading="lazy" /> </div> : <div className="bgCover"  >  <img  src={"/bg/b1.jpg"} alt="blog" loading="lazy" /> </div>}
      <div className="h1 clip"> {name} </div>
          <Slider {...settings} className='container' >

            { blogs?.length > 1 ? (
              blogs.map((e,index)=>(
                <div  key={index} className="coverImg">
                    <img src={e.thumbnail} alt={e.title}  />
                    <div className="date" onClick={_=> push(`/blog/${e._id}`)} > <Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /> </div>
                    <p className='h2' onClick={_=> push(`/blog/${e._id}`)} >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                    <button className='bt' onClick={_=> push(`/blog/${e._id}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                </div>
            ))
            )  :(
              Array(3).fill(1).map((e,index)=> (<Skeleton key={index} />))
            )}

          </Slider>
        </div>
  )
}

export default OneBlog