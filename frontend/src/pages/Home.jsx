import {React,useEffect,useContext,useState} from 'react'
import User_context from '../components/User_context'

import axios from 'axios'



const Home = () => {

  const { userID } = useContext(User_context)
  const [Final_out, setFinal_out] = useState([]);

  
  useEffect(() => {
    
    console.log(userID)
    fetchItems()

  }, [userID]);


  const fetchItems = async () =>{
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + userID);
    console.log(data);
    const items = await data.json();

    console.log(items);
    // setItems(items);
    setFinal_out(items)
  }

  console.log("final out")
  console.log(Final_out)

  return (

   

    <div>Home</div>
  )
}

export default Home