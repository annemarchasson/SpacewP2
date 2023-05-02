import { Routes, Route } from "react-router-dom";
import "./App.css";
import Payment from "@pages/PaymentForm/Payment";
import AboutUsPage from "@pages/AboutUs/AboutUsPage";
import { useState } from "react";
import BookingForm from "./pages/BookingForm/BookingForm";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <NavBar />
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
          element={<ConfirmationPage daronne={message} />}
        />
      </Routes>
    </>
  );
}
export default App;
