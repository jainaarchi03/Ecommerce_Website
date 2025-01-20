import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Home from "./Pages/Home/Home";
import TopRated from  "./Pages/TopRated";
import Womens_Wear from "./Pages/Womens_Wear";
import Purse from "./Pages/Purse";
import Jewellery from  "./Pages/Jewellery";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import ProductData from "./Pages/ProductData";
import { AuthProvider } from "./components/Context/AuthContext";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Rentals from "./Pages/Home/Rentals";
import { CartProvider } from './components/Context/CartContext';
import ImagePage from "./Pages/ImagePage";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
    <AuthProvider>
  <Router>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Default redirect to login */}
        <Route path="/Login" element={<Login/>}/>
        <Route path="/ImagePage" element={<ImagePage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/womens_wear" element={<Womens_Wear/>} />
        <Route path="/jewellery" element={<Jewellery/>}/>
        <Route path="/purse" element={<Purse/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/rentals" element={<Rentals/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/productData/:id" element={<ProductData/>}/>
        </Routes>
      {/* <Hero handleOrderPopup={handleOrderPopup} /> 
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonials /> */}
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
     
    </div>
</Router>
</AuthProvider>
</CartProvider>
  );
};

export default App;

