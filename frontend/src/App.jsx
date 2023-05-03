import { Routes, Route } from "react-router-dom";
import Payment from "@pages/PaymentForm/Payment";
import { useState, useEffect } from "react";
import AboutUsPage from "@pages/AboutUs/AboutUsPage";
import NavBar from "./components/NavBar/NavBar/NavBar";
import NavBarMobile from "./components/NavBar/NavBarMobile/NavBarMobile";
import BookingForm from "./pages/BookingForm/BookingForm";
import Home from "./pages/Home";
import ConfirmationPage from "./pages/ConfirmationPage";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
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
      {screenSize.width < 600 ? <NavBarMobile /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Booking-form/:id"
          element={<BookingForm message={message} setMessage={setMessage} />}
        />
        <Route path="/Payment-form" element={<Payment />} />
        <Route path="/About-us" element={<AboutUsPage />} />
        <Route
          path="/ConfirmationPage/:id"
          element={<ConfirmationPage identity={message} />}
        />
      </Routes>
    </>
  );
}
export default App;
