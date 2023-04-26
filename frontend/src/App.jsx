import { Routes, Route } from "react-router-dom";
import "./App.css";
import Payment from "@pages/PaymentForm/Payment";
import AboutUsPage from "@pages/AboutUs/AboutUsPage";
import BookingForm from "./pages/BookingForm/BookingForm";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking-form" element={<BookingForm />} />
        <Route path="/Payment-form" element={<Payment />} />
        <Route path="/About-us" element={<AboutUsPage />} />
      </Routes>
    </>
  );
}
export default App;
