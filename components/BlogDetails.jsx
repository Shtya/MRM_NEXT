import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Animation from './helpers/Animation';
import Footer from './Footer';
import Navbar1 from './Navbar';
import Related from './Slide/Related';
import baseURL from '@/server/API/API';
import MetaTag from '../pages/MetaTag';


const BlogDetails = () => {
  const [data , setdata] = useState([])
  const [blogs , setblogs] = useState([])
  const [titleCustom , settitleCustom] = useState()
    let router = useRouter() ;
    let id = router.query.id ;

  useEffect(_=>{
    baseURL.get("").then(e=> setblogs(e.data.data))
    baseURL.get(id).then(e=>{
      setdata(e.data.data)
      e.data?.data?.title?.length >= 110 ? settitleCustom(e.data?.data?.title.slice(0,110) + "..."): settitleCustom(e.data?.data?.title)
    })} ,[] )
    
        var settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1 , 
          autoplay:true ,
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

  return (
    <div className='blog-details'>
      <MetaTag title={data?.titleData} desc={data?.descData} />

      <div className="container container3"> <Navbar1 /> </div>
      <Animation />
      {/* <SlideNav share={true} whats={true} /> */}

      <div className="home">
          <div className="container">
              {data?.thumbnail ? <div className="boxImg hidden-img"  >  <img src={data?.thumbnail} alt={data.title || "blog"} /> </div> : <div className="load"></div> }
              <div className="boxs" data-aos="fade-left" >
              <p  className="h2 hidden-text" > <span>{data.title}</span> </p>
            </div>
        </div>
      </div>

      <div className={`blog-detail blog-detail-${data?.num}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </div>
      
      <div className="interactive">
        <div className="container">
        <div className="reacted">
            <span className='icons'><i className="fa-solid fa-thumbs-up"></i></span>
            <span> 
              <input type="text" placeholder='Leave a reply' />  
              <i className="bt2 fa-solid fa-paper-plane"></i>
            </span>
            <span className='icons'><i className="fa-brands fa-linkedin"></i> </span>
            <span className='icons'><i className="fa-brands fa-x-twitter"></i> </span>
            <span className='icons'><i className="fa-brands fa-facebook-f"></i> </span>
          </div>
        </div>
      </div>

      <div className="related">
        <div className="h1">Dive Into More Articles on This Topic</div>
        <Related  data={blogs} settings={settings} />
        </div>
      <Footer />
    </div>
  )
}

export default BlogDetails