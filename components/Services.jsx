"use client" ;
import Link  from "next/link";
import { memo } from 'react';
import { useRouter } from "next/router";

const services = [
  {route:"/social-media-marketing-agency-in-dubai",   title:"social media marketing"       , icon:"clip  fa-solid fa-bullhorn "        ,desc:"Enhance your online presence with our social media management." ,                                                                 },
  {route:"/web-development-company-in-dubai", title:"web design & Development "    , icon:"clip  fa-solid fa-pen-nib"          ,desc:"We transform your online presence with responsive web design, e-commerce solutions, and ongoing maintenance" ,                   },
  {route:"/indoor-and-outdoor-signages-agency-in-dubai",   title:"indoor & outdoor signages " , icon:"clip  fa-solid fa-signs-post"       ,desc:"Maximize brand visibility with our eye-catching indoor and outdoor advertising solutions." ,                                            },
  {route:"/Photography-In-Dubai",  title:"photography & videography "   , icon:"clip  fa-regular fa-circle-play"    ,desc:"We offer captivating visuals for your marketing. our high-quality images and videos tell a story that engages your audience." ,       },
  {route:"/exhibition-and-display-stand-agency-in-dubai", title:"exhibition display stands"    , icon:"clip  fa-solid fa-layer-group"      ,desc:"Enhance your physical presence at events with custom-designed exhibition stands creatively showcasing your products or services.  " , },
  {route:"/Corporate-gifts-in-dubai",    title:"Corporate gifts "            , icon:"clip  fa-solid fa-gift"             ,desc:"Discover our premium gifting options, including customized items and trophies, to make any occasion special." ,                       },
  {route:"/advertising-ppc-agency-in-dubai",    title:"media buying"                 , icon:"clip  fa-solid fa-shop"             ,desc:"Maximize online reach with effective advertising. Optimize campaigns with social media and Google Ads."    ,                              },
  {route:"/branding-agency-in-dubai",   title:"Branding "                    , icon:"clip  fa-brands fa-connectdevelop"  ,desc:"A strong brand identity connects with your audience. Let our branding services help you create a resonant brand." ,                   },
  {route:"/seo-agency-in-dubai",      title:"SEO "                         , icon:"clip  fa-solid fa-magnifying-glass" ,desc:"Drive organic traffic and secure top search engine rankings with our expert SEO services.  " ,                                     },
];

const Services = memo(()=> {
  const {push} = useRouter()

  return (
    <>
    <section className='services search-edite' id='Services'>
    <div className="bgCover"  >  <img  src={"/bg/b1.jpg"} alt="services" loading="lazy" /> </div>
       <h2 className='h1 clip ' data-aos="zoom-in" >OUR SERVICES</h2> 
      
      <div className="container">
      <ul className='ul' data-aos="zoom-in">
        {services.map((e , index) => (
          <div key={index} className="box" data-aos="zoom-in"   >
            <div className="animate" ></div>
            <div className="a" onClick={_=> push(e.route) }   >
              <Link href={e.route}><i className={`${e.icon} `}> <span />  <span /> </i> </Link>
              <h3 className='h2 '>{e.title}</h3>
              <div className='p '>{e.desc}</div>
          </div>
          </div>
        ))}
      </ul>
      </div>
    </section>
    </>
  );
})


export default Services