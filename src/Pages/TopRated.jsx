import React, { useContext} from 'react';
import Img1 from "../assets/Tops/top1.jpg";
import Img2 from "../assets/Tops/top2.jpg";
import Img3 from "../assets/Tops/top3.webp";
import Img4 from "../assets/Tops/top4.webp";
import Img5 from "../assets/Tops/top5.webp";
import Img8 from "../assets/Tops/top8.webp";
import Img9 from "../assets/Tops/top9.webp";
import Img13 from "../assets/Tops/jeans1.webp";
import Img14 from "../assets/Tops/jeans2.webp";
import Img15 from "../assets/Tops/jeans3.webp";
import { Link } from 'react-router-dom';



const TopsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Regular Fit",
    rating: 4.7,
    color: "Black",
    aosDelay: "0",
    sizes:['S', 'M', 'L']
  },
  {
    id: 2,
    img: Img2,
    title: "Slim Fit Crop Top",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
    sizes:['S', 'M', 'L']
  },
  {
    id: 3,
    img: Img3,
    title: "Women Fitted Crop Top",
    rating: 4.6,
    color: "Red",
    aosDelay: "400",
    sizes:['S', 'M', 'L']
  },
  {
    id: 4,
    img: Img4,
    title: "Fastdry T-Shirt",
    rating: 4.4,
    color: "White",
    aosDelay: "600",
    sizes:['S', 'M', 'L']
  },
  {
    id: 5,
    img: Img5,
    title: "Slim Fit Tank Top",
    rating: 4.5,
    color: "Black",
    aosDelay: "800",
    sizes:['S', 'M', 'L']
  },
  {
    id: 6,
    img: Img8,
    title: "Women Regular Fit V-Neck Top",
    rating: 4.3,
    color: "Lavender",
    aosDelay: "800",
    sizes:['S', 'M', 'L']
  },
  {
    id: 7,
    img: Img9,
    title: "Women Regular Fit V-Neck Top",
    rating: 4.3,
    color: "Lavender",
    aosDelay: "800",
    sizes:['S', 'M', 'L']
  },
  {
    id: 8,
    img: Img13,
    title: "Women Baggy Jeans",
    rating: 4.5,
    color: "Red",
    aosDelay: "800",
    sizes:['S', 'M', 'L']
  },
  {
    id: 9,
    img: Img14,
    title: "Women Boyfriend Jeans",
    rating: 4.5,
    color: "Red",
    aosDelay: "800",
    sizes:['S', 'M', 'L']
  },
  {
    id: 10,
    img: Img15,
    title: "Women Denim Jeans",
    rating: 4.5,
    color: "Red",
    aosDelay: "800",
    sizes:['S', 'M', 'L']
  },
];

const TopRated = () => {
 
  return (
    <div className="top_rated">
      <h1 className="text-4xl font-800 mb-8 p-10 text-center text-gray-700">TOP RATED</h1>
      <div className="grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
        {TopsData.map((data) => (
          <div key={data.id} className="p-4 border border-gray-200 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay={data.aosDelay}>
            <Link to={`/productData/${data.id}`}> 
              <img src={data.img} alt={data.title} className="rounded-md w-60 h-[300px]" />
              <h2 className="text-lg font-semibold">{data.title}</h2>
              <p className="text-gray-500">Rating: {data.rating}</p>
              <p className="text-gray-500">Color: {data.color}</p>
              </Link>
          </div>
        ))}
      </div>
      <div className="text-left font-bold my-3">
      </div>
    </div>
  );
};

export default TopRated;