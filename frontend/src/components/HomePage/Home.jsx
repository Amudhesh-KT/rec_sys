import {React,useContext,useEffect,useState} from "react"

import Categories from "./Categories.jsx"
import Popular_Items from "../Popular_Products/Popular_Items.jsx"
import axios from "axios"
import "../../App.css"

const Home = () => {


  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <Popular_Items />
        </div>
      </section>
    </>
  )
}

export default Home