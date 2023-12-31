import Image from "next/image"

const  OneWhy = ({img , title , desc , classn , alt , altCover}) => {
  return (
    <div className={`one-why ${classn}`} data-aos="zoom-in">
      <div className="coverImg" > <Image  src={img} alt={altCover} loading="lazy" /> </div>
      <div className="inner-box">
        <div className="p ">{desc}</div>
      </div>
  </div>
  )
}

export default OneWhy