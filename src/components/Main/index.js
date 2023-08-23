import About from "../../pages/About";
import Home from "../../pages/Home";
import Test from "../../pages/Test";
import { Routes, Route } from "react-router";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
