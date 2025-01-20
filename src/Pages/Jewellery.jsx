import React from 'react'
import { useState, useEffect } from 'react'


 function Purse() {
const[photos, setPhotos]= useState([]);
useEffect(()=>{
  fetch('https://fakestoreapi.com/products/category/jewelery')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    setPhotos(data);
  });
}, []);


return (
  <div className="grid grid-cols-3 p-2 px-8 py-8 gap-6">
  {photos.map((photo) => (
    <div key={photo.id} className="flex justify-center items-center">
      <img src={photo.image} alt={photo.title} className="w-56 h-56 object-cover border-4 border-gray-300 rounded-lg" />
    </div>
  ))}
</div>
);
}
export default Purse;