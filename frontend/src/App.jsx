import { Routes, Route } from "react-router-dom";
import "./App.css";
import BookingForm from "@components/BookingForm/BookingForm";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Payment from "@pages/PaymentForm/Payment";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking-form" element={<BookingForm />} />
        <Route path="/Payment-form" element={<Payment/>} />
      </Routes>
    </>
  );
}
export default App;
