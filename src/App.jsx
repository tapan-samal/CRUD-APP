import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Create from "./components/Create";
import Display from "./components/Display";
import Update from "./components/Update";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Display/>} />
        <Route path="create" element={<Create/>} />
        <Route path="update/:id" element={<Update/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
