import React from "react";
import "./style.css"


const Footer = () => {
 
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            {/* <img height={70} width={170} src={logo}/> */}
           
            <h1 className="footer-title"> &nbsp; Digiverz</h1>
            
            <p className="move_right">Furniture E-commerce</p>

          </div>
          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li className="footer_list_hover" onClick={()=>{window.location.href="https://www.kaartech.com/careers/"}}>Careers</li>
              <li className="footer_list_hover" onClick={()=>{window.location.href="https://www.kaartech.com/services/"}}>Our Services</li>
              <li className="footer_list_hover" onClick={()=>{window.location.href="https://www.kaartech.com/terms-and-conditions/"}}>Terms & Conditions</li>
              <li className="footer_list_hover" onClick={()=>{window.location.href="https://www.kaartech.com/privacy-policy/"}}>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Kaar Technologies, Level 8,Shyamala Towers, No 136,Arcot Road, Chennai- 600 093</li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
