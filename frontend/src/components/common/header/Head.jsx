import React from "react"
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';


const Head = () => {
  const Navigate = useNavigate();
  const Logout = () =>{
    Navigate('/')
  }
  return (
    <>
      <section className='head' >
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91 9871234510</label>
            <i className='fa fa-envelope'></i>
            <label> furniture@ecomm.com</label>
          </div>
          <div className='right row RText'>
            {/* <label>Theme FAQ"s</label>
            <label>Need Help?</label> */}
            <Tooltip title="Logout" arrow>
            <label className="logout_btn" onClick={Logout}><LogoutIcon/></label></Tooltip>
            {/* <FontAwesomeIcon icon="fa-solid fa-right-from-bracket">Logout</FontAwesomeIcon> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
