import { Routes, Route } from "react-router-dom";
import "./App.css";
import Payment from "@pages/PaymentForm/Payment";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar/NavBar";
import NavBarMobile from "./components/NavBar/NavBarMobile/NavBarMobile";
import BookingForm from "./pages/BookingForm/BookingForm";
import Home from "./pages/Home";

function App() {
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
    {screenSize.width<600 ?  <NavBarMobile/> : <NavBar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking-form" element={<BookingForm />} />
        <Route path="/Payment-form" element={<Payment />} />
      </Routes>
    </>
  );
}
export default App;
