import React from 'react'
import axios from 'axios';
import { Card, Grid, Row, Text } from "@nextui-org/react";

export const Product = () => {
  const ProductCard = async()=>{
  const Productdisplay = await axios.get("http://127.0.0.1:8000/reclist")
  console.log(Productdisplay.data)   
}
  return (
    <div>Product</div>
  )
}
