import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewerApp from "./ViewerApp";
import CreatorApp from "./CreatorApp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewerApp />} />
        <Route path="/creator" element={<CreatorApp />} />
      </Routes>
    </Router>
  );
}

export default App;
