import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";

function App() {
  return <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/a" element={<About />}  />
        </Routes>
      </BrowserRouter>
  </>;
}

export default App;
