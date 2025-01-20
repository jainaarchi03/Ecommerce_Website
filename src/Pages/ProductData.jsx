import React from 'react';
import Img1 from "../assets/Tops/top1.jpg";
import Img_1 from "../assets/Tops/item0.jpg";
import Img__1 from "../assets/Tops/item1.jpg";
import Img2 from "../assets/Tops/top2.jpg";
import Img__2 from  "../assets/Tops/item2.4.jpg"
import Img_2 from "../assets/Tops/iteem-2.1.webp";
import Img3 from "../assets/Tops/top3.webp";
import Img_3 from "../assets/Tops/item6.0.avif";
import Img4 from "../assets/Tops/top4.webp";
import Img_4 from "../assets/Tops/image5.1.jpg";
import Img5 from "../assets/Tops/top5.webp";
import Img_5 from "../assets/Tops/item4.2.jpeg";
import Img8 from "../assets/Tops/top8.webp";
import Img_8 from "../assets/Tops/item3.1.jpeg";
import Img__8 from "../assets/Tops/item3.2.jpg";
import Img9 from "../assets/Tops/top9.webp";
import Img_9 from "../assets/Tops/item7.1.jpeg";
import Img__9 from "../assets/Tops/item7.webp";
import Img13 from "../assets/Tops/jeans1.webp";
import Img14 from "../assets/Tops/jeans2.webp";
import Img15 from "../assets/Tops/jeans3.webp";
import { useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CartContext } from '../components/Context/CartContext';
import { useContext} from 'react';


const TopsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Regular Fit",
    rating: 4.7,
    price: 250,
    color: "Black",
    aosDelay: "0",
    sizes: ['S', 'M', 'L'],
    views: [Img_1, Img__1]// Use appropriate images
  },
  {
    id: 2,
    img: Img2,
    title: "Slim Fit Crop Top",
    rating: 4.5,
    price: 250,
    color: "Black",
    aosDelay: "200",
    sizes: ['S', 'M', 'L'],
    views: [Img_2, Img__2]
  },
  {
    id: 3,
    img: Img3,
    title: "Women Fitted Crop Top",
    rating: 4.6,
    price: 250,
    color: "Red",
    aosDelay: "400",
    sizes: ['S', 'M', 'L'],
    views: [Img_3]
    
  },
  {
    id: 4,
    img: Img4,
    title: "Fastdry T-Shirt",
    rating: 4.4,
    price: 250,
    color: "White",
    aosDelay: "600",
    sizes: ['S', 'M', 'L'],
    views: [Img_4]
  },
  {
    id: 5,
    img: Img5,
    title: "Slim Fit Tank Top",
    rating: 4.5,
    price: 250,
    color: "Black",
    aosDelay: "800",
    sizes: ['S', 'M', 'L'],
    views: [Img_5]
  },
  {
    id: 6,
    img: Img8,
    title: "Women Cute Tank Top",
    rating: 4.5,
    price: 250,
    color: "Black",
    aosDelay: "800",
    sizes: ['S', 'M', 'L'],
    views: [Img_8, Img__8]
  },
  {
    id: 7,
    img: Img9,
    title: "Women Crop Top",
    rating: 4.0,
    price: 250,
    color: "Pink",
    aosDelay: "800",
    sizes: ['S', 'M', 'L'],
    views: [Img_9, Img__9]
  },
  {
    id: 8,
    img: Img13,
    title: "Women Baggy Jeans",
    rating: 4.5,
    price: 250,
    color: "Red",
    aosDelay: "800",
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 9,
    img: Img14,
    title: "Women Boyfriend Jeans",
    rating: 4.5,
    price: 250,
    color: "Red",
    aosDelay: "800",
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 10,
    img: Img15,
    title: "Women Denim Jeans",
    rating: 4.5,
    price: 250,
    color: "Red",
    aosDelay: "800",
    sizes: ['S', 'M', 'L'],
  },
];

const ProductData=()=>{
  const { addToCart } = useContext(CartContext);
  const {id} = useParams();
  const product= TopsData.find(p=> p.id === parseInt(id))

  if(!product){
    return <div>Product not found</div>;
  }
    const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    };
  
    
  return (
    
    <div className=' flex flex-col lg:flex-row items-center p-4'>
    {/* Image Slider */}
    <div className="w-full lg:w-1/2">
      <Slider {...settings}>
        {product.views.map((view, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={view} alt={`${product.title} view ${index + 1}`} className="w-auto h-[500px] object-contain mx-auto" />
          </div>
        ))}
      </Slider>
    </div>

    {/* Details */}
    <div class="container">
    <div className="w-full space-y-4 p-4 border rounded-lg ">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <button className='px-1 py-0.25 bg-green-600 text-white font-semibold rounded-md'>
      {product.rating}<span className="mr-0.5">⭐</span>
      </button>
      <p className='text-lg'> ₹{product.price}/-</p>
      <p className="text-lg">Color: {product.color}</p>
      <h2 className="text-xl font-semibold">Sizes Available:</h2>
      <div className='flex gap-2'>
        {product.sizes.map(size=>(
          <button key={size} 
          className="px-4 py-1 rounded-md border transition-transform hover:scale-105 hover-bg-gray-200">
            {size}
          </button>
         ))}
       <div>
         <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => {
                addToCart(product)
              }}>
              Add to Bag
            </button>
              </div>
      </div>
      </div>
    </div>

  </div>
);
};

export default ProductData;