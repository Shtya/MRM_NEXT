"use client" ;
import { memo, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const Landing = memo(() => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {videoRef.current.addEventListener('loadeddata', handleVideoLoaded);}
    return () => { if (videoRef.current) {   videoRef.current.removeEventListener('loadeddata', handleVideoLoaded); } }
  }, []);

  const handleVideoLoaded = () => {
    videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
    videoRef.current.setAttribute('preload', 'auto');
  };

  return (
    <header id='header'  >
      <div className="bgCover" style={{zIndex:"0"}}  >  <img   src={"/bg/b3.jpg"} alt="Landing" loading="lazy" /> </div>
      <div className="container"> <Navbar /> </div>
      <section id='video' >
        
          <video webkit-playsinline playsInline  preload="auto" ref={videoRef}  src={"/Dashboard.mp4"} id='myVideo'   autoPlay loop muted >
            <source src={"/Dashboard.mp4"} type="video/mp4" />
          </video>
        </section>
    </header>
  )
})

export default Landing