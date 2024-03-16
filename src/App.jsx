import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
