import {React,useContext,useEffect,useState} from "react"
import Slider from "react-slick"
import Cart from "./Cart"
import "./style.css"

import { Text } from "@nextui-org/react";



const NewArrivals = () => {
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
      <section className='TopCate background'>
        
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              {/* <h2>Products</h2> */}
              <Text
            h1
            size={30}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
           Recommended Products
          </Text>
            </div>
            <div className='heading-right row '>
              {/* <span>View all</span> */}
              {/* <i className='fa-solid fa-caret-right'></i> */}
            </div>
          </div>
          <div className="rec_list_main">
          <Cart />
          </div>
        </div>
      </section>
    </>
  )
}

export default NewArrivals
