import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import banner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import Cards from "../Cards/Cards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={banner} alt="" className="banner" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Provident ab eaque consectetur quis quas. Repellat officiis aliquid
            minima dolore alias. <br />
            Dolorum, incidunt maiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. <br /> Provident ab eaque consectetur quis quas.
            Repellat officiis aliquid minima dolore alias. Dolorum, incidunt
            maiores.
          </p>
          <div className="hero-btns">
            <button className="button-item">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="button-item dark-btn">
              <CiCircleInfo />
              <span>More Info</span>
            </button>
          </div>
        </div>
        <Cards />
      </div>
      <div className="categories">
        <Cards title="Made for You" category={"popular"} />
        <Cards title="Top Rated" category={"top_rated"} />
        <Cards title="Upcoming" category={"upcoming"} />
        <Cards title="Most Watched" category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
