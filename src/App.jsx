import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" Component={MainPage}></Route>
         </Routes>
      </BrowserRouter>
   );
}
