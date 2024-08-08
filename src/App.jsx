import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Navbar from "./Component/Navbar/Navbar";
import UserList from "./Component/UserLIst/UserList";
import Getparams from "./Component/Getparams/Getparams";

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/params" element={<Getparams />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
