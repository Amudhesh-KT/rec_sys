import React from "react"
import cat1 from "../assets/images/category/cat1.png"
import cat2 from "../assets/images/category/cat2.png"
import cat3 from "../assets/images/category/cat3.png"
import cat4 from "../assets/images/category/cat4.png"
import cat5 from "../assets/images/category/cat5.png"
import cat6 from "../assets/images/category/cat6.png"
import cat7 from "../assets/images/category/cat7.png"
import cat8 from "../assets/images/category/cat8.png"
import cat9 from "../assets/images/category/cat9.png"
import cat10 from "../assets/images/category/cat10.png"
import cat11 from "../assets/images/category/cat11.png"
import cat12 from "../assets/images/category/cat12.png"
import cat13 from "../assets/images/category/cat13.png"
import cat14 from "../assets/images/category/cat14.png"
import cat15 from "../assets/images/category/cat15.png"
import cat16 from "../assets/images/category/cat16.png"




const Categories = () => {
  const data = [
    {
      cateImg: cat1,
      cateName: "Bar Furniture",
    },
    {
      cateImg: cat2,
      cateName: "Beds",
    },
    {
      cateImg: cat3,
      cateName: "Bookcases",
    },
    {
      cateImg: cat4,
      cateName: "Cupboard",
    },
    {
      cateImg: cat5,
      cateName: "Cafe Furniture",
    },
    {
      cateImg: cat6,
      cateName: "Chairs",
    },
    {
      cateImg: cat7,
      cateName: "Chest of Drawers",
    },
    {
      cateImg: cat8,
      cateName: "Children Furniture",
    },
    {
      cateImg: cat9,
      cateName: "Nursery Furniture",
    },
    {
      cateImg: cat10,
      cateName: "Outdoor Furniture",
    },
    {
      cateImg: cat11,
      cateName: "Sideboard",
    },
    {
        cateImg: cat12,
        cateName: "Sofa",
      },
      {
        cateImg: cat13,
        cateName: "Tables",
      },
      {
        cateImg: cat14,
        cateName: "Trolleys",
      },
      {
        cateImg: cat15,
        cateName: "TV Furniture",
      },
      {
        cateImg: cat16,
        cateName: "Wardrobes",
      },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
