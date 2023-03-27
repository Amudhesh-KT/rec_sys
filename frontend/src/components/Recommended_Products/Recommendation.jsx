import { React, useEffect, useState,useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Product_context from "../Products/Product_context"


import Progress_bar from "./Progressbar";
import Rating from '@mui/material/Rating';


const Recommendation = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    }
    const navigate = useNavigate();
    const {setproductid,productid } = useContext(Product_context)

    const [Final_out, setFinal_out] = useState([]);

    let user__id = localStorage.getItem('user__id');
    console.log("from recommend page")
    console.log(user__id)

    useEffect(() => {
        fetchItems();
    }, [user__id]);

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
    return (
        <>

            {/* <div className='content grid product rec_products' > */}
            {Final_out.map((val, index) => {
                const handleProductid = () => {
                    let id = val.product_id
                    console.log(id);

                    setproductid(id);
                    
                    

                    console.log("im from product context")
                    
                    navigate('/product/'+id)

                }

                const percentage = Randomnum(80, 100);
                return (
                    <div className=" rec_list_">

                        <div>
                            <div className='box product grid_size' key={index}>
                                <h5 className="left_align">{percentage}% match</h5>

                                <Progress_bar bgcolor="red" progress={percentage} height={5} />
                                <div className='nametop d_flex'>
                                    <span className='tleft'>{val.product_name}</span>

                                </div>
                                <div className='img img_size'>
                                    <img src={`data:image/png;base64,${val.product_img}`} />
                                </div>

                                <span className='tright'>{val.Product_description.split(",")[0]}</span>

                                <p>Rs. {val.Product_price} /-</p>

                                <Rating name="read-only" value={val.Product_ratings} precision={0.5} size="small" readOnly />

                                <button className='btn-primary' onClick={handleProductid}>View Product</button>

                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Recommendation