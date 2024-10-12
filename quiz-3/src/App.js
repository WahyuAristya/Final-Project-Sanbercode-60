import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import ManageData from "./components/pages/manage-data/manageDataPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-data" element={<ManageData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
