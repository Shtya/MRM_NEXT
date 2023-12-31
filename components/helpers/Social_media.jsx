"use client"  ;
import Image from "next/image"
import { memo } from 'react'
import  Link  from "next/link"
import { Animate } from '@/pages/_app'

const Social_media = memo(({Img , title , desc , data}) => {
  return (
    <div className="social-media">
          <div className="bgCover"> <Image  src={Img} alt="web design services" loading="lazy" /> </div>
        <div className="container">
            <h3  className='h1 '>{title}</h3>
            <div data-aos={Animate} className="phead ">{desc}</div> 
            <div className="boxs">
            { data.map((e,index)=> ( 
            <Link href={`${e?.path}`} key={index} className={`cover1 `} >
              <div className="box">
                <div className="IcomCover">  <Image src={e.img} alt="social" loading="lazy" /> </div>
                <h3 className='h2 '>{e.title}</h3>
                <p className='p '>{e.desc}</p>
              </div>
            </Link> ))}
            </div>
        </div>
        </div>
  )
})

export default Social_media