import {React,useContext,useEffect,useState} from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import Shop from "../shops/Shop"
import axios from "axios"

// usercontext for userid
import User_context from '../User_context'


const Home = () => {


  const { userID } = useContext(User_context)
  console.log(userID)
  console.log("im home page")

  useEffect(() => {
    console.log("Calling fetch items")
    console.log(userID)
    // let userID = sessionStorage.getItem('userId')
    // console.log(userID)

    // setUserID(localStorage.getItem('userId'))
    // console.log(userID)

    fetchItems();

  },[userID]);

  const [items, setItems] = useState([]);
  const [Final_out, setFinal_out] = useState([]);

  const fetchItems = async () => {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + userID);
    console.log(data);
    const items = await data.json();

    console.log(items);
    // setItems(items);
    setFinal_out(items)

  };

  // setFinal_out(items)
  console.log("im final out")
  console.log(Final_out)

  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {/* <Categories /> */}
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
