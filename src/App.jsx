import "./App.css";
import React from "react";
import "./MainApp.css";
import Home from "./Screens/Home";
import MoviePage from "./Screens/MoviePage";
import TvShowPage from "./Screens/TvShowPage";
import Header from "./Screens/Header";
import Footer from "./Screens/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="tvshows" element={<TvShowPage />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
