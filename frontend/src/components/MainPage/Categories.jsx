import {React,useState,useEffect} from "react"
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

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}


const Categories = () => {

  // const [, updateState] = React.useState();
  // const forceUpdate = useForceUpdate();
  const [SelectedCategory, setSelectedCategory] = useState("")
  const [products, setProducts] = useState([]);


  useEffect(() => {
   
  }, [SelectedCategory])
  

  // Function to fetch products by category from backend API
  // const fetchProductsByCategory = async (category) => {
  //   const response = await fetch(`/products/${category}`);
  //   const datapro = await response.json();
  //   setProducts(datapro);
  // };

  // Event handler for category selection
 
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
          const handleCategorySelect = () => {
            let catego = value.cateName
            setSelectedCategory(catego);
            // fetchProductsByCategory(category);
            console.log(catego)
            console.log(SelectedCategory)
            console.log("Im in func")
          };
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              {/* <span >{value.cateName}</span> */}
              <button onClick={handleCategorySelect}>{value.cateName}</button>
            </div>
          )
        })}
      </div>
      
    </>
  )
}

export default Categories
