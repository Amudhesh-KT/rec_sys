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
      <section className='NewArrivals background'>
        <div className='container '>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              {/* <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' /> */}
              {/* <h2>Recommended Items</h2> */}
              <Text
            h1
            size={30}
            className="dq-head"
            css={{
              textGradient: "45deg, $blue600 -10%, $black 80%",
            }}
            weight="bold"
          >
           &nbsp;   Recommended Items
          </Text>
            </div>
            <div className='heading-right row '>
              {/* <span>View all</span> */}
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
