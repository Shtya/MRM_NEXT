'use client' ;
import { memo } from "react"
import { Animate } from "@/pages/_app"
import Image from "next/image"

const PHOTOgraphy = memo(({classn ,Img , nameServices , title , data}) => {
  return (
    <div className={classn}>
      <div className="bgCover"  >  <Image  src={Img} alt={nameServices} loading="lazy" /> </div>
        <h2 className="h1" data-aos={Animate}>{title}</h2> 
        <div className="container">
          {
            data.map((e,index)=> (
              <div className="box" key={index} data-aos={Animate}>
                <div className="innerbox">
                <div className="coverImg "> <Image src={e.img} alt={nameServices} loading="lazy" />  </div>
                <div className="text">
                  <h3 className="h2 "> {e.title} </h3>
                  <div className="p ">{e.desc} </div>
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
})

export default PHOTOgraphy