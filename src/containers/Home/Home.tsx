import React from 'react';
import img from '../../images/uvodni-img.png';
import Navbar from '../../components/Navbar';
import './Home.scss';
import Title from '../../components/Title/Title';

const Home: React.FC = () => {
  return (
    <>
      <div className="cesta" aria-hidden="true">
        <div className="okraj"></div>
        <div className="bg"></div>
        <div className="pruh"></div>
        <div className="mezera m1"></div>
        <div className="mezera m2"></div>
        <div className="mezera m3"></div>
        <div className="mezera m4"></div>
      </div>

      <Title ishomeTitle>NA KŘIŽOVATKY S ROZUMEM</Title>
      <div className="outercontainer">
        <Navbar type="home" />
        <div className="containerright">
          <img src={img} alt="úvodní obrázek dopravní situace" />
        </div>
      </div>

      <footer>
        Stránky vytvořili studenti Gymnázia a Jazykové školy s právem státí jazykové zkoušky Zlín jako projekt pro
        Středoškolskou odbornou činnost v oboru informatika, 2021.
      </footer>
    </>
  );
};

export default Home;
