import React from "react"
import "./style.css"
import TopCart from "./TopCart"
import Home from "../MainPage/Home"
import "../MainPage/Home.css"

import { Text } from "@nextui-org/react";

const TopCate = () => {
  return (
    <>
    <Home/>
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
           Products
          </Text>
            </div>
            <div className='heading-right row '>
              {/* <span>View all</span> */}
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
