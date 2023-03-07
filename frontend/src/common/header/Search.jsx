import React from "react"
import logo from "../../images/Digi_logo.png"
import { Link } from "react-router-dom"
import "../../App.css"
import { fontAwesome } from "fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "@nextui-org/react"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search' style={{ height: "13%",marginTop:"0%",marginBottom:"30px" }}>
        <div className='container c_flex' style={{ width: "100%", height: "100%" }}>
          <div className='logo_width'>
            <img height={70} width={170} src={logo} alt='' />
            {/* <p className="search_bar_title">Categories</p> */}
          </div>

          <div className='search-box center_place f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>Search</span>
          </div>
          {/* <div className="login_btn_searchbar">
            <Button color="gradient" size="sm" rounded><Link to='/login'>Login</Link></Button>
          </div> */}

          {/* <div className='icon'>
            <FontAwesomeIcon icon={'face-thermometer'}/>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem}</span>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Search
