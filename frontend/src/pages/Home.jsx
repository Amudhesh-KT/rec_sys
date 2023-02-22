import {React,useEffect,useContext,useState} from 'react'
import User_context from '../components/User_context'
import { Product } from '../components/Product'

import axios from 'axios'



const Home = () => {

  const { userID } = useContext(User_context)
  const [Final_out, setFinal_out] = useState([]);
 const [pop_list, setpop_list] = useState([]);
  
  useEffect(() => {
    
    console.log(userID)
    fetchItems()
    fetchPopItems()

  }, [userID]);


  const fetchItems = async () =>{
    // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + userID);
    console.log(data);
    const items = await data.json();

    // console.log(items);
   
    setFinal_out(items)
  }

  const fetchPopItems = async () =>{

    const data = await fetch("http://127.0.0.1:8000/pop_list");
    console.log(data);
    const items = await data.json();

    // console.log(items)
    setpop_list(items)
  }

  console.log("Collobrative recommendation list")
  console.log(Final_out)

  console.log("popularity recommendation list")
  console.log(pop_list)



  return (

   

    <div>Home
      {/* {
        arr.map((data) => {
          return <Product data={data}/>
        })
      } */}
  
    </div>
  )
}

export default Home