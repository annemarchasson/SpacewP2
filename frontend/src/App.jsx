import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import BookingForm from "./components/BookingForm";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking-form" element={<BookingForm />} />
      </Routes>
    </>
  );
}
export default App;
