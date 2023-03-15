import React from 'react'
import { useEffect,useState,useContext } from 'react';
import axios from 'axios';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import "./Product_view.css"
import ProductID_context from '../ProductID_context';

const Product_view = () => {
    const { Product_ID } = useContext(ProductID_context)
    useEffect(() => {
        fetchProduct();
    }, [Product_ID]);

    const [Product_item, setProduct_item] = useState([])

    const fetchProduct= async() =>{
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const res = await fetch("http://127.0.0.1:8000/productview" + Product_ID);

    console.log(res.data);
    const product_item = await res.json();

    setProduct_item(product_item);
    }
  return (
    <div>
            <div class="product-card">
                <div class="badge">Hot</div>
                <div class="product-tumb">
                    {/* <img src="https://i.imgur.com/xdbHo4E.png" alt=""> */}
                </div>
                <div class="product-details">
                    <span class="product-catagory">Women,bag</span>
                    <h4><a href="">Women leather bag </a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                    <div class="product-bottom-details">
                        <div class="product-price"><small>$96.00</small>$230.99</div>
                        <div class="product-links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product_view


