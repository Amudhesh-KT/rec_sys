import React from 'react'
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import "./Product_view.css"

import Product_context from './Product_context';

const Product_view = () => {
    let {pid}=useParams();


const {productid} = useContext(Product_context)

 

    const [Product_item, setProduct_item] = useState([])

   

    useEffect(() => {
    fetchProduct();
        console.log("useEffect is working")
    }, [pid]);

    

   

    const fetchProduct= async() =>{
       
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const res = await fetch("http://127.0.0.1:8000/productview?productid=" + pid);

    

    console.log("Im product details")
    console.log(res);
    const product_details = await res.json();
    
    setProduct_item(product_details);


    
    }

    console.log(Product_item)
  return (
    <div>
           {
            Product_item[0] &&  <div class="product-card">
            <div class="product-tumb">
                <img src={`data:image/png;base64,${Product_item[0].product_img}`} alt=""/>
            </div>
            <div class="product-details">
                <span class="product-catagory">{Product_item[0].Product_category}</span>
                <h4><a href="">{Product_item[0].product_name}</a></h4>
                <p>{Product_item[0].Product_description}</p>
                <div class="product-bottom-details">
                    <div class="product-price">Rs. {Product_item[0].product_price} /-</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </div>
           }
        </div>
  )
}

export default Product_view


