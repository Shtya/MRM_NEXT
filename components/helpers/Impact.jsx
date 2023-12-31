import React, { memo } from 'react'
import { Animate } from '@/pages/_app'
import Image from "next/image"

const Impact = memo(({ classn ,Img , data , title , desc , nameServices ,}) => {
  return (
    <div className={classn}>
        <div className="bgCover"  >   <Image  src={Img} alt={nameServices} loading="lazy" />  </div>
            <div className="container">
            <div className="container"><h2 className="h1" data-aos={Animate}>{title}</h2></div>
            {desc && <div className="container"><div className="phead" data-aos={Animate}>{desc}</div></div>}
                <div className="boxs">
                  {
                    data.map((e,index)=> (
                      <div className="box"  key={index} data-aos="zoom-in-up">
                          <div className="coverImg hidden-img"> <Image src={e.img} alt={nameServices} loading="lazy" /> </div>
                          <div className="text" >
                              <h3 className="h2 clip ">{e.title} </h3>
                              <div className="p ">{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
  )
})

export default Impact