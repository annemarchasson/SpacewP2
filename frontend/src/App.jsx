import { Routes, Route } from "react-router-dom";
import Payment from "@pages/PaymentForm/Payment";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm/BookingForm";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Booking-form" element={<BookingForm />} />
      <Route path="/Payment" element={<Payment />} />
    </Routes>
  );
}
export default App;
