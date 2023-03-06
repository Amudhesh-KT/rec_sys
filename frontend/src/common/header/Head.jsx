import React from "react"

const Head = () => {
  return (
    <>
      <section className='head' style={{height:"35%"}}>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 9876543210</label>
            <i className='fa fa-envelope'></i>
            <label> furniture@ecomm.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <label>EN</label>
            <label>INR</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
