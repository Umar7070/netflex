import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Netflix from "./components/Netflix";
import Guestpage from "./components/Guestpage";
import Navbar from "./components/Navbar";
import Favorite from "./components/Favorite";
import Videoplayer from "./components/Videoplayer";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guestpage" element={<Guestpage />} />
      <Route path="/netflix" element={<Netflix />} />
      <Route path="/favourite" element={<Favorite />} />
      <Route path="/videoplayer" element={<Videoplayer/>} />
      </Routes>
    </>
  );
}
