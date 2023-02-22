import React from "react"
import logo from "../../images/Digi_logo.png"
import { Link } from "react-router-dom"
import "../../App.css"
import { fontAwesome } from "fontawesome"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo_width'>
            <img height={50} width={100} src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon'>
            {/* <FontAwesomeIcon icon={'face-thermometer'}/>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem}</span>
              </Link> 
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
