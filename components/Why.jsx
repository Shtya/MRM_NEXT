"use client" ;
import Animation from './helpers/Animation'
import { memo } from 'react'

const Why = memo(() => {



  const choose = [
    {idx:"0" , icon : 'fas fa-pencil-ruler font-icon' , title : "We're problem solvers"  , desc:"We conquer all challenges with creativity, determination, and a 'can-do' attitude. We have solutions to your problems. "} ,
    {idx:"1" , icon : 'fas fa-drafting-compass font-icon' , title : "We deliver results, not just talk"  , desc:"Our commitment is to implement effective strategies, never overpromise, work hard, and measure success by our achievements. "} ,
    {idx:"2" , icon : 'fas fa-layer-group font-icon' , title : "We prioritize you"  , desc:"Your success drives us. We're always available to meet your needs, offer guidance, and listen closely to your input.  "} ,
    {idx:"3" , icon : 'fas fa-rocket font-icon' , title : "We focus on your growth"  , desc:" Our solutions are always advanced, results-driven, and up-to-date with the latest technologies and trends. "} ,
  ]
  
  return (

    <section id='Why' className='Why'>
      <Animation />
      <div className="bgCover"  >  <img  src={"/bg/b3.jpg"} alt="Man in blue suit thinking with question mark and speech bubbles graphic" loading="lazy" /> </div>
      <div className="container1">
        <h2 className="h1" data-aos="zoom-in" >WHY CHOOSE US</h2>
      </div>
      <div className="container">
              <div className="boxs"  >
                  {choose.map((e,idx)=> (
                    <div className="box" data-aos="zoom-in" key={idx} >
                      <div className="group" >
                          <i  className={`${e.icon} `}></i>
                          <h2 className='h2' > {e.title}  </h2>
                      </div>
                      <span className={`p`}>{e.desc}</span>
                    </div>
                  ))}
              </div>

            <div className="Img hidden-img"  >
              <img data-aos="fade-left" data-aos-delay="200"  src={"/Why.jpg"} alt="Why-chooseus" />
            </div>
      </div>
    </section>
  )
})

export default Why