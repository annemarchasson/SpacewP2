import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import BookingForm from "./components/BookingForm";

function App() {
  return (

  <> 
      <BookingForm />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </>
  );
}
export default App;
