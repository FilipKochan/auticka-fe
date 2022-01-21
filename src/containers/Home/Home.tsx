import React from "react";
import img from "../../images/uvodni-img.png";
import Navbar from "../../components/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <img src={img} alt="" />
      <Navbar type="home" />
    </div>
  );
};

export default Home;
