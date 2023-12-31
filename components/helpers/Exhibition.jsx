"use client" ;
import React, { memo, useState } from 'react'
import Image from "next/image"

const ExhibitionGallery = memo(({ classn ,Img , nameServices , data , title  }) => {
  const [ImgView , setImgView] = useState()
  return (
    <div className={classn}>
        <div className="bgCover"  >   <Image  src={Img} alt={nameServices} loading="lazy" />  </div>
        <div className="container"> <h2 className="h1" style={{marginBottom:"30px"}}>{title}</h2></div>
        <div className="container">
          <div className="boxs">
            {data.map((e,index)=> ( <div key={index} data-aos="zoom-in-up"  className="coverImg"> <i onClick={_=> setImgView(e.img)} className="fa-solid fa-compress"></i> <Image src={e.img} alt="slider" /> </div> ))}
            {ImgView && <div className="show-img"> 
              <Image src={ImgView} alt={nameServices} loading="lazy" data-aos="zoom-in-up" /> 
              <i onClick={_=>setImgView("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
  )
})

export default ExhibitionGallery