import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ImagePage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchValue = query.get('search') || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products?search=${searchValue}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);
   // Filter products locally based on search input
   const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className="w-full h-full">
              <img 
                src={product.image} 
                alt={`Product ${index}`} 
                className="object-cover w-full h-full rounded-lg py-2" 
                style={{ aspectRatio: '1 / 1' }} // Ensures all images have a 1:1 aspect ratio
              />
            </div>
          ))
        ) : (
          <p>No products found for "{searchValue}".</p>
        )}
      </div>
    </div>
  );
};

export default ImagePage;
