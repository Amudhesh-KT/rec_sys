import React from 'react'
import { createContext, useState,useContext } from 'react'

const ProductID_context = createContext({});

export const ProductIDProvider = ({children}) => {

    const [productid, setproductid] = useState("");
  return ( <ProductID_context.Provider value={{productid, setproductid}} > {children} </ProductID_context.Provider> )
}

export default ProductID_context
