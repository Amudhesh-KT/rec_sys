import React from "react"
import "./style.css"
import TopCart from "./TopCart"
import Home from "../MainPage/Home"
import "../MainPage/Home.css"

const TopCate = () => {
  return (
    <>
    <Home/>
      <section className='TopCate background'>
        
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Products</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
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
