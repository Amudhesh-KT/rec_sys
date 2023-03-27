import { React, useContext, useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import axios from "axios"
import { useNavigate } from "react-router-dom"
import Product_context from "../Products/Product_context"

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// importing usercontext
// import User_context from "../User_data/User_context.jsx"

// importing category context
import Category_context from "../HomePage/Category_context.jsx"

const Cate_Products = () => {

  // const { userID } = useContext(User_context)

  const { category } = useContext(Category_context)
  const navigate = useNavigate();
  const { setproductid, productid } = useContext(Product_context)


  useEffect(() => {
    fetchProducts();
  }, [category]);



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  }

  const [product_list, setproduct_list] = useState([]);

  const fetchProducts = async () => {
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
          const handleProductid = () => {
            let id = value.product_id
            console.log(id);

            setproductid(id);



            console.log("im from product context")

            navigate('/product/' + id)

          }
          return (
            <>
              <div className='box product grid_size' key={index}>
                <div className='nametop d_flex proct_name'>
                  <span className='tleft'>{value.product_name}</span>

                </div>
                <div className='img img_size'>
                  <img src={`data:image/png;base64,${value.product_img}`} />
                </div>

                <span className='tright'>{value.Product_description.split(",")[0]}</span>

                <p>Rs. {value.product_price} /-</p>
                <div>
                
                <Rating name="read-only" value={value.Product_ratings} precision={0.25}  size="small" readOnly />
                </div>
                <button className='btn-primary' onClick={handleProductid}>View Product</button>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Cate_Products