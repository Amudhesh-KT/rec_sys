import React from "react"
import logo from "../../../assets/images//digi_logo.png"
import "../../../App.css"


const Search = ({ CartItem }) => {

  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })

  return (
    <>
      <section className='search' style={{ height: "13%",marginTop:"0%",marginBottom:"30px" }}>
        <div className='container c_flex' style={{ width: "100%", height: "100%" }}>
          <div className='logo_width'>
            <img height={70} width={170} src={logo} alt='' />
           
          </div>

          <div className='search-box center_place f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search your products here...' />
            <span>Search</span>
          </div>

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
