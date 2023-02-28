import {React,useContext,useEffect,useState} from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import Shop from "../shops/Shop"
import axios from "axios"

import Sdata from "./Sdata"



// usercontext for userid
import User_context from '../User_context'



const Home = () => {


  const { userID } = useContext(User_context)
  console.log(userID)
  console.log("im home page")

  useEffect(() => {
    console.log("Calling fetch items")
    console.log(userID)

    fetchItems();
    // fetchItems2();

  },[userID]);

  
  const [Final_out, setFinal_out] = useState([]);
  const [Final_out2, setFinal_out2] = useState([]);

  const fetchItems = async () => {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + userID);
    console.log(data);
    const items = await data.json();

    console.log(items);
    
    setFinal_out(items)

  };

 const fetchItems2 = async () =>{
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  const res = await fetch("http://127.0.0.1:8000/pop_list");
  console.log(res);
  const pop_items = await res.json();

  console.log(pop_items);
  setFinal_out2(pop_items)
 }

  console.log("popularity recommendations")
  console.log(Final_out2)

  

  console.log("collobrative recommendations")
  console.log(Final_out)

  // Sdata = Final_out2;



  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <Categories />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
