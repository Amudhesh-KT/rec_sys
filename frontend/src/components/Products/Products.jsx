import {React, useContext} from "react"
import "../../App.css"
import Home from "../HomePage/Home.jsx"

import { Text } from "@nextui-org/react";
import Cate_Products from "./Cate_Products"

import Category_context from "../HomePage/Category_context.jsx"

const Products = () => {

  const { category } = useContext(Category_context)


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
           {category}
          </Text>
            </div>
            <div className='heading-right row '>
              {/* <span>View all</span> */}
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          
          <Cate_Products />
        </div>
      </section>
    </>
  )
}

export default Products