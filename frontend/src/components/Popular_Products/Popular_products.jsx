import { React, useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../App.css"

// usecontext for userid
import Product_context from "../Products/Product_context"






const Popular_products = () => {

    const {setproductid,productid } = useContext(Product_context)

   

    const [pop_data, setpop_data] = useState([]);

    

    const navigate = useNavigate();

    let user__id = localStorage.getItem('user__id');
    console.log("from recommend page")
    console.log(user__id)

    useEffect(() => {
        fetchItems()

    }, [user__id]);

    const fetchItems = async () => {
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        const res = await fetch("http://127.0.0.1:8000/pop_resp");
        console.log("slide data")
        console.log(res);
        const pop_items = await res.json();

        console.log(pop_items);
        setpop_data(pop_items)
    }

    console.log("im pop items in slide")
    console.log(pop_data)




    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ marginBottom: "0rem" }}>{dots}</ul>
        },
    }
    return (
        <>
            <Slider {...settings}>
                {pop_data.map((value, index) => {
                     const handleProductid = () => {
                        let id = value.product_id
                        console.log(id);

                        setproductid(id);
                        
                        

                        console.log("im from product context")
                        
                        navigate('/product/'+id)

                    }
                    return (
                        <div className="slider_comp_main">
                            <div className="slidercomponent_main">
                                <div className='box d_flex top popular' >
                                    <div className='slider_comp left'>
                                        <h1>{value.product_name}</h1>
                                        {/* <h1>"50% Off For Your First Shopping"</h1> */}
                                        <p>{value.Product_description}</p>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p> */}
                                        <p>Rs.{value.Product_price}/-</p>
                                        
                                        <button className='btn-primary' onClick={handleProductid}>View Product</button>
                                    </div>
                                    <div className='right'>
                                        <img className="slider_img" src={`data:image/png;base64,${value.product_img}`} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}

            </Slider>
        </>
    )
}

export default Popular_products