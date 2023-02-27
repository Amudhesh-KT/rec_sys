import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../App.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ marginBottom:"0rem" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className="slider_comp_main">
            <div className="slidercomponent_main">
              <div className='box d_flex top' key={index}>
                <div className='slider_comp left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img className="slider_img" src={value.cover}  alt='' />
                </div>
              </div>
              </div>
            </div>
          )
          
        })}
        
      </Slider>
    </>
  )
}

export default SlideCard
