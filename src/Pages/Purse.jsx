import React from 'react'
import { useState, useEffect } from 'react'


 function Purse() {
const[photos, setPhotos]= useState([]);
useEffect(()=>{
  fetch('https://fakestoreapi.com/products?limits=15')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    setPhotos(data);
  });
}, []);


return (
  <div className="grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5 py-8">
  {photos.map((photo) => (
    <div key={photo.id} className="flex justify-center items-center">
      <img src={photo.image} alt={photo.title} className="w-56 h-56 object-cover border-4 border-gray-300 rounded-lg" />
    </div>
  ))}
</div>
);
}
export default Purse;