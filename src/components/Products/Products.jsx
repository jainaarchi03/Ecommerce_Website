import React from "react";
import Img6 from "../../assets/women/women6.png";
import Img5 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img1 from "../../assets/women/women5.webp";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Rentals",
    rating: 5.0,
    aosDelay: "0",
    navigateTo: "/rentals",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    aosDelay: "200",
    navigateTo: "/top-rated",
  },
  {
    id: 3,
    img: Img3,
    title: "Shades",
    rating: 4.7,
    aosDelay: "400",
    navigateTo: "/shades",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    aosDelay: "600",
    navigateTo: "/tshirt",
  },
  {
    id: 5,
    img: Img5,
    title: "Jewellery",
    rating: 4.5,
    aosDelay: "800",
    navigateTo: "/jewellery",
  },
  {
    id: 6,
    img: Img6,
    title: "Purse",
    rating: 4.5,
    aosDelay: "800",
    navigateTo: "/purse",
  }
];

const Products = () => {

  const navigate = useNavigate();
  const handleImageClick = (navigateTo) => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="mt-12 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Fashion Trends presents you the most popular products in our store.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 place-items-center gap-1">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
                onClick={()=> handleImageClick(data.navigateTo)}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
