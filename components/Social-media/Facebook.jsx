import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

import FacebookIntro from "@/public/Socialmedia/bg-social.jpg"
import FacebookCover from "@/public/Socialmedia/facebook.png"
import ImgSection from "@/public/bg/b8.jpg"

import f1 from "@/public/Socialmedia/facebook/f1.png"
import f2 from "@/public/Socialmedia/facebook/f2.png"
import f3 from "@/public/Socialmedia/facebook/f3.png"
import f4 from "@/public/Socialmedia/facebook/f4.png"
import f5 from "@/public/Socialmedia/facebook/f5.png"
import f6 from "@/public/Socialmedia/facebook/f6.png"
import f7 from "@/public/Socialmedia/facebook/f7.png"
import f8 from "@/public/Socialmedia/facebook/f8.png"
import f9 from "@/public/Socialmedia/facebook/f9.png"
import f10 from "@/public/Socialmedia/facebook/f10.png"
import f11 from "@/public/Socialmedia/facebook/f11.png"
import f12 from "@/public/Socialmedia/facebook/f12.png"
import f13 from "@/public/Socialmedia/facebook/f13.png"

import  { Divider} from '../../components/patterns/Pattern1'
import IMG1 from "@/public/bg/b1.jpg"
import IMG2 from "@/public/bg/b2.jpg"
import IMG3 from "@/public/bg/b3.jpg"
import MetaTag from '../../pages/MetaTag'
import Social_Hero from '../helpers/Social_Hero'



const TYPES = [
  {icon :"" ,title :"Facebook Lead Generation" , desc:" Collect valuable information from interested individuals through lead ads on Facebook and Instagram, streamlining the process with image, video, or carousel format followed by a lead form."  },
  {icon :"" ,title :"Facebook Carousel Ads" , desc:" Ideal for restaurants and e-commerce businesses, these ads enable you to showcase up to ten photos and videos in a single ad, each with its unique link and description."  },
  {icon :"" ,title :"Image Ads" , desc:" Utilize stunning visuals to attract visitors to your website and landing pages, with the flexibility to use multiple images in a single advertisement."  },
  {icon :"" ,title :"Facebook Collection Ads" , desc:" Boost product sales for e-commerce websites by displaying items from your product catalog, allowing for personalized ads for each product."  },
  {icon :"" ,title :"Facebook Page Likes" , desc:" Encourage users to like your business profile page, using videos or images tailored to an 8:3 ratio for an effective page likes campaign."  },
  {icon :"" ,title :"Facebook Slideshow Ads" , desc:" These dynamic ads utilize motion, sound, and text to tell your brand's story, ensuring engagement regardless of internet speed."  },
  {icon :"" ,title :"Facebook Post Boosting" , desc:" Amplify the reach and engagement of your Facebook page posts, increasing likes, comments, shares, and photo/video views."  },
  {icon :"" ,title :"Video Ads" , desc:" Engage your audience with captivating video ads that leverage the power of sound and motion to convey your message effectively."  },
  {icon :"" ,title :"Store Visits" , desc:" Attract local audiences to your brick-and-mortar store with Facebook store visit ads, targeting potential customers in your vicinity."  },
]

const SERVICES = [
  {icon:f1 , title:"Campaign Planning and Setup"     , desc:"We meticulously plan and set up campaigns aligned with your goals."},
  {icon:f2 , title:"Multilingual Content Creation"     , desc:"Crafting content that resonates with diverse audiences through multilingual expertise."},
  {icon:f3 , title:"Eye-catching Graphics and Video Creation"     , desc:"Designing visually appealing and compelling graphics and videos that capture attention."},
  {icon:f4 , title:"Complete Ad Setup"     , desc:"Ensuring your ads are optimized for maximum impact and reach."},
  {icon:f5 , title:"Building a Relevant Audience Base"     , desc:"Identifying and targeting the right audience for your brand."},
  {icon:f6 , title:"Messenger Bots Installation"     , desc:"Implementing messenger bots for enhanced customer engagement."},
  {icon:f7 , title:"Advanced Ad Technology Implementation"     , desc:"Leveraging advanced advertising technology for superior results."},
  {icon:f8 , title:"Pixel Tracking Code Installation"     , desc:"Setting up pixel tracking to measure and optimize ad performance."},
  {icon:f9 , title:"A/B Testing"     , desc:"Conducting tests to determine the most effective strategies for your business."},
  {icon:f10 , title:"Continuous Audience Engagement"     , desc:"Keeping your audience engaged through responses, tags, likes, and comments."},
  {icon:f11 , title:"Keyword Implementation"     , desc:"Incorporating keywords to enhance your brand's visibility."},
  {icon:f12 , title:"Monitoring, Analysis, and Reporting"     , desc:"Ongoing monitoring, in-depth analysis, and monthly reports to track and improve campaign performance."},
  {icon:f13 , title:"Dynamic Product Ads"     , desc:"Tailoring ads to showcase your products dynamically."},
]


const Facebook = () => {
   return (
    <div className="Facebook shared">
      <MetaTag canonical="facebook" title=" Best Facebook Marketing Agency in Dubai , UAE  "  desc="Looking for Facebook Marketing Services in Dubai? Elevate Your Brand's Visibility and Engagement MRM Delivers High ROI with Efficient Spending on Facebook " />
      <Social_Hero Cover={FacebookCover} Intro={FacebookIntro} 
      H1="Unlock Your Business Potential with Our Expert Facebook Marketing Services" 
      Img={IMG1} 
      Span1="Harnessing the Power of Facebook Marketing  " 
      Span2="Facebook has been a leader in digital marketing for a long time. Utilizing Facebook for advertising can provide significant brand exposure, engage potential customers, increase brand recognition, and generate valuable leads. " 
      Span3="Boost Your Business Growth with MRM's Trusted Facebook Marketing Partnership in Dubai"
      Span4="MRM is a well-known and one of the best Facebook advertising agencies based in Dubai.  We specialize in developing engaging campaigns that allow businesses to target their audience based on various criteria, such as location, age, gender, interests, and demographics.  MRM team conducts thorough research on your brand and offerings to create and implement effective digital and social media marketing campaigns tailored to your business.  This helps capture the attention of your target audience and convert them into loyal customers." />

        <Divider classn="divider" />
        <div className="box-style-6">
          <div className="bgCover"  >  <img  src={IMG2} alt="Facebook-page" loading="lazy" /> </div>
          <div className="h1 "data-aos="zoom-in-right" > A Comprehensive Range of Facebook Ad Types </div>
          <div className="phead"data-aos="zoom-in-right" > MRM Agency offers a comprehensive array of Facebook ad types to suit your unique marketing objectives </div>
          <div className="container">
          {TYPES.map((e,index)=> (
            <figure className="snip1218" key={index} data-aos="zoom-in" data-aos-delay={`${index + 1}00`}>
              <figcaption>
                <span></span>
                <h3 className='h2'>{e.title}</h3>
                <div className="p">{e.desc}</div>
              </figcaption>
            </figure>
          ))}
          </div>
        </div>


        <Divider classn="divider" />
        <div className="box-style-4">
          <div className="bgCover"  >  <img  src={IMG3} alt="Facebook-page" loading="lazy" /> </div>
          <div className="container">
            <div className="h1" data-aos="fade-up" >Our Facebook advertising services include</div>
            <div className="bg"> <img src={ImgSection} alt="Facebook-page" loading="lazy" /> </div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div className="box" key={index} data-aos="fade-up" >
                  <div className="coverImg"> <img src={e.icon} alt={e.title} /> </div>
                    <h2 className='h2'>{e.title} </h2>
                    <p className='p'>{e.desc}</p>
                </div>            
              ))
            }
            </div>
          </div>
        </div>

      <Footer />
      </div>
  )
}

export default Facebook





