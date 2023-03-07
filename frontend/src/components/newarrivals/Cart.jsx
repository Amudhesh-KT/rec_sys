import { React, useContext, useEffect, useState } from "react"
import Ndata from "./Ndata"
import axios from "axios"

import Progress_bar from "../Progressbar"

import { Text } from "@nextui-org/react";


// usercontext for userid
import User_context from '../User_context'
import Slider from "react-slick"

const Cart = () => {



  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  }

  const [Final_out, setFinal_out] = useState([]);

  const [Num, setNum] = useState('')

  const { userID } = useContext(User_context)


  useEffect(() => {
    fetchItems();
  }, [userID]);

  function Randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // function RandomNum() {
  //   const [numbers, setNumbers] = useState([]);

  //   useEffect(() => {
  //     const randomNum = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 60);
  //     randomNum.sort((a, b) => b - a);
  //     setNumbers(randomNum);
  //     return setNumbers
  //   }, []);
  // }

  const fetchItems = async () => {

  let user__id = localStorage.getItem('user__id');
  console.log("from recommend page")
  console.log(user__id)


    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + user__id);
    console.log(data);
    const items = await data.json();

    console.log(items);

    setFinal_out(items)

    
  

  };



  console.log("im final out from new arrivals");
  console.log(Final_out)
  console.log(typeof (Final_out))

  sessionStorage.setItem("data", Final_out);
  const a = sessionStorage.getItem("data");
  console.log(a);



  const progressContainer = document.querySelector('.progress-container');

  // initial call
  // setPercentage();

  // function setPercentage() {
  //   const percentage = progressContainer.getAttribute('data-percentage') + '%';

  //   const progressEl = progressContainer.querySelector('.progress');
  //   const percentageEl = progressContainer.querySelector('.percentage');

  //   progressEl.style.width = percentage;
  //   percentageEl.innerText = percentage;
  //   percentageEl.style.left = percentage;
  // }



  return (
    <>

      {/* <div className='content grid product rec_products' > */}
      {Final_out.map((val, index) => {

        const percentage = Randomnum(80, 100);
        return (
          <div className=" rec_list_">

          <div>
            <div className='box product grid_size' key={index}>
              <h5 >{percentage}% match</h5>

              <Progress_bar bgcolor="red" progress={percentage} height={5} />
              <div className='nametop d_flex'>
                <span className='tleft'>{val.product_name}</span>

              </div>
              <div className='img img_size'>
                <img src={`data:image/png;base64,${val.product_img}`} />
              </div>

              <span className='tright'>{val.Product_description}</span>

              <p>Rs. {val.Product_price} /-</p>

            </div>
          </div>
          </div>
  )
})}
</>
  )}

export default Cart
