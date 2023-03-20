import { React, useState, useEffect, useContext } from "react"


import cat1 from "../../assets/images/category/cat1.png"
import cat2 from "../../assets/images/category/cat2.png"
import cat3 from "../../assets/images/category/cat3.png"
import cat4 from "../../assets/images/category/cat4.png"
import cat5 from "../../assets/images/category/cat5.png"
import cat6 from "../../assets/images/category/cat6.png"
import cat7 from "../../assets/images/category/cat7.png"
import cat8 from "../../assets/images/category/cat8.png"
import cat9 from "../../assets/images/category/cat9.png"
import cat10 from "../../assets/images/category/cat10.png"
import cat11 from "../../assets/images/category/cat11.png"
import cat12 from "../../assets/images/category/cat12.png"
import cat13 from "../../assets/images/category/cat13.png"
import cat14 from "../../assets/images/category/cat14.png"
import cat15 from "../../assets/images/category/cat15.png"
import cat16 from "../../assets/images/category/cat16.png"


import Category_context from "./Category_context"


// function useForceUpdate() {
//     const [value, setValue] = useState(0);
//     return () => setValue(value => value + 1); 
   
// }


const Categories = () => {

    const { setcategory, category } = useContext(Category_context);



    const data = [
        {
            cateImg: cat1,
            cateName: "Bar Furniture",
            categoryName: "Bar furniture"
        },
        {
            cateImg: cat2,
            cateName: "Beds",
            categoryName: "Beds"
        },
        {
            cateImg: cat3,
            cateName: "Bookcases",
            categoryName: "Bookcases and shelving units"
        },
        {
            cateImg: cat4,
            cateName: "Cupboard",
            categoryName: "Cabinets and cupboards"
        },
        {
            cateImg: cat5,
            cateName: "Cafe Furniture",
            categoryName: "Cafe furniture"
        },
        {
            cateImg: cat6,
            cateName: "Chairs",
            categoryName: "Chairs"
        },
        {
            cateImg: cat7,
            cateName: "Chest of Drawers",
            categoryName: "Chests of drawers and drawer units"
        },
        {
            cateImg: cat8,
            cateName: "Children Furniture",
            categoryName: "Children's furniture"
        },
        {
            cateImg: cat9,
            cateName: "Nursery Furniture",
            categoryName: "Nursery furniture"
        },
        {
            cateImg: cat10,
            cateName: "Outdoor Furniture",
            categoryName: "Outdoor furniture"
        },
        {
            cateImg: cat11,
            cateName: "Sideboard",
            categoryName: "Sideboards, buffets and console tables"
        },
        {
            cateImg: cat12,
            cateName: "Sofa",
            categoryName: "Sofas and armchairs"
        },
        {
            cateImg: cat13,
            cateName: "Tables",
            categoryName: "Tables and desks"
        },
        {
            cateImg: cat14,
            cateName: "Trolleys",
            categoryName: "Trolleys"
        },
        {
            cateImg: cat15,
            cateName: "TV Furniture",
            categoryName: "TV and media furniture"
        },
        {
            cateImg: cat16,
            cateName: "Wardrobes",
            categoryName: "Wardrobes"
        },
    ]

    return (
        <>
            <div className='category'>
                {data.map((value, index) => {
                    const handleCategorySelect = () => {
                        let catego = value.categoryName


                        setcategory(catego);


                        console.log("usecontext fucntion")
                        console.log(category)


                        

                       

                        window.scrollBy(0, 505);
                    };
                    return (
                        <div className='box f_flex' key={index}>
                            <img src={value.cateImg} alt='' />
                            {/* <span >{value.cateName}</span> */}
                            <button className="category_list_button" onClick={handleCategorySelect}>{value.cateName}</button>
                        </div>
                    )
                })}

            </div>

        </>
    )
}

export default Categories