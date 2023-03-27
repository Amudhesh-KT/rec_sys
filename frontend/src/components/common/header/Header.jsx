import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"


const Header = ({ CartItem }) => {
  return (
    <div style={{height:"18vh",width:"100%"}}>
      <Head />
      <Search CartItem={CartItem} />
      {/* <Navbar /> */}

    </div>
  )
}

export default Header
