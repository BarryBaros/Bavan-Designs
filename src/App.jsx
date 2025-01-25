import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Men from "./components/Men";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="men" element={<Men />} />
      </Routes>
    </Router>
  );
}

export default App;
