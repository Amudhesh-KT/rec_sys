import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import "../styles/Product.css"

export const Product = (props) => {

        useEffect(() => {
            console.log(props)
        }, );

    //   const user = "user1"  
    //   const ProductCard = async()=>{
    //   const Productdisplay = await axios.get("http://127.0.0.1:8000/reclist?userID=" + user)
    //   console.log(Productdisplay.data)   

    return (
        <div>
            <div class="product-card">
                <div class="badge">Hot</div>
                <div class="product-tumb">
                    {/* <img src="https://i.imgur.com/xdbHo4E.png" alt=""> */}
                </div>
                <div class="product-details">
                    <span class="product-catagory">Women,bag</span>
                    <h4><a href="">Women leather bag {props.data.name}</a></h4>
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
