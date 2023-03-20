import React from 'react'
import { createContext, useState } from 'react'

const Product_context = createContext({})

export const ProductProvider = ({children}) =>{
  const [productid, setproductid] = useState("");
  return (<Product_context.Provider value = {{productid, setproductid}}>{children}</Product_context.Provider>)
}

export default Product_context