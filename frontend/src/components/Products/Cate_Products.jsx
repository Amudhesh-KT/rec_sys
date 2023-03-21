import { React, useContext, useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import axios from "axios"

// importing usercontext
import User_context from "../User_data/User_context.jsx"

// importing category context
import Category_context from "../HomePage/Category_context.jsx"

const Cate_Products = () => {

  const { userID } = useContext(User_context)

  const {category} = useContext(Category_context)


  useEffect(() => {
    fetchProducts();
  }, [category ]);



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  }

  const [product_list, setproduct_list] = useState([]);

  const fetchProducts= async () =>{
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const res = await fetch("http://127.0.0.1:8000/product_list?category=" + category);

    console.log(res.data);
    const product_items = await res.json();

    setproduct_list(product_items);


  }

  console.log("Bed products list")
  console.log(product_list)


  return (
    <>
      <Slider {...settings}>
        {product_list.map((value, index) => {
          return (
            <>
              <div className='box product grid_size' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.product_name}</span>
                  
                </div>
                <div className='img img_size'>
                  <img src={`data:image/png;base64,${value.product_img}`} />
                </div>
                
                <span className='tright'>{value.Product_description}</span>

                <p>Rs. {value.product_price} /-</p>
                
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Cate_Products