import Home from "./pages/Home/Home";
import Success from "./pages/success/Success";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </>
  );
}

export default App;
