import React from 'react'
import { createContext, useState,useContext } from 'react'

const Category_context = createContext({});

export const CategoryProvider = ({children}) =>{

    const [category, setcategory] = useState();

    return(<Category_context.Provider value={{category, setcategory}} >{children}</Category_context.Provider>)
}

export default Category_context