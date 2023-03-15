import React from 'react'
import Popular_products from './Popular_products'
import "../../App.css"

const Popular_Items = () => {
  return (
    <>
      <section className='homeSlide contentWidth' >
        <div className='container'>
          <Popular_products />
        </div>
      </section>
    </>
  )
}

export default Popular_Items