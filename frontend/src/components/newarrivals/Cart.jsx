import { React, useContext, useEffect, useState } from "react"
import Ndata from "./Ndata"
import axios from "axios"


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

  function Randomnum(min,max){
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
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + userID);
    console.log(data);
    const items = await data.json();

    console.log(items);

    setFinal_out(items)

  };

  console.log("im final out from new arrivals");
  console.log(Final_out)



  return (
    <>

      <div className='content grid product rec_products' >
        {Final_out.map((val, index) => {
          return (
            
            
          <div className='box' key={index}>
            
                <div className="box">
                  {/* <Slider {...settings}> */}
                  <h5 >{Randomnum(60,100)} % match</h5>
                  <div >
                    <img className='recc_product_img' src={`data:image/png;base64,${val.product_img}`} />
                  </div>
                  <h4>{val.product_name}</h4>
                  <span>Rs.{val.Product_price}/-</span>
                  {/* </Slider> */}
                </div>
                
              </div>
            

          )
        })}
      </div>


    </>
  )
}

export default Cart