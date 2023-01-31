import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.tsx";
import Landing from "./pages/Landing.js";
import Footer from "./components/Footer.tsx";
import SignIn from "./pages/SignIn.js";
import Signup from "./pages/Signup.js";
import ScrollToTop from "./hooks/ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
