import "./App.css"
import Registration from "./Components/Registration";
import ForgetPassword from "./Components/ForgetPassword"
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom"
import React from "react";
import { BrowserRouter } from "react-router-dom"
// import Header from "./Components/Header"

function App() {
  return (
    <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App;