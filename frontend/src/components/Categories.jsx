import React from 'react'

const Categories = () => {
    const data = [
        {
          cateImg: "./images/category.cat1.png",
          cateName: "Bar Furniture",
        },
        {
          cateImg: "./images/category/cat2.png",
          cateName: "Beds",
        },
        {
          cateImg: "./images/category/cat3.png",
          cateName: "Bookcases",
        },
        {
          cateImg: "./images/category/cat4.png",
          cateName: "Cupboard",
        },
        {
          cateImg: "./images/category/cat5.png",
          cateName: "Cafe Furniture",
        },
        {
          cateImg: "./images/category/cat6.png",
          cateName: "Chairs",
        },
        {
          cateImg: "./images/category/cat7.png",
          cateName: "Chest of Drawers",
        },
        {
          cateImg: "./images/category/cat8.png",
          cateName: "Children Furniture",
        },
        {
          cateImg: "./images/category/cat9.png",
          cateName: "Nursery Furniture",
        },
        {
          cateImg: "./images/category/cat10.png",
          cateName: "Outdoor Furniture",
        },
        {
          cateImg: "./images/category/cat11.png",
          cateName: "Sideboard",
        },
        {
            cateImg: "./images/category/cat12.png",
            cateName: "Sofa",
          },
          {
            cateImg: "./images/category/cat13.png",
            cateName: "Tables",
          },
          {
            cateImg: "./images/category/cat14.png",
            cateName: "Trolleys",
          },
          {
            cateImg: "./images/category/cat15.png",
            cateName: "TV Furniture",
          },
          {
            cateImg: "./images/category/cat16.png",
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