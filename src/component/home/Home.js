import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <img className="home_image" src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="slider" />

      <div className="home_row">
        <Product
          id="148562094"
          title="
          BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory."
          image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg"
          prise={107.5}
          rating={5}
        />
        <Product
          id="1434234"
          title="
          Razer Huntsman Tournament Edition TKL Tenkeyless Gaming Keyboard: Fast Keyboard Switches - Linear Optical Switches - Chroma RGB Lighting - PBT Keycaps"
          image="https://m.media-amazon.com/images/I/71GVODjIEJL._AC_SL1500_.jpg"
          prise={105.5}
          rating={5}
        />
      </div>

      <div className="home_row">
        <Product
          id="18484254"
          title="
          SteelSeries Aerox 5 - Lightweight Gaming Mouse - 18000 CPI -- TrueMove Air Optical Sensor - Ultra-lightweight Water Resistant Design - Universal USB-C..."
          image="https://m.media-amazon.com/images/I/81kapy75bOL._AC_SL1500_.jpg"
          prise={103.5}
          rating={5}
        />
        <Product
          id="1494744"
          title="
          Gaming Chair, Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair with Footrest and Lumbar Support, Red/Black"
          image="https://m.media-amazon.com/images/I/61ORkc52tVL._AC_SL1500_.jpg"
          prise={109.5}
          rating={5}
        />
        <Product
          id="14104674"
          title="Dove Men+Care Body Wash for Men's Skin Care Extra Fresh Effectively Washes Away Bacteria While Nourishing Your Skin, 18 Ounce (Pack of 4)"
          image="https://m.media-amazon.com/images/I/81wWAxW+lZL._SL1500_.jpg"
          prise={101.5}
          rating={5}
        />
      </div>

      <div className="home_colum">
        <Product
          id="1056734"
          title="
          Marcy Easy Folding Motorized Treadmill/Pre Assembled Electric Running Machine JX-651BW"
          image="https://m.media-amazon.com/images/I/710M0o9KxWL._AC_SL1500_.jpg"
          prise={106.5}
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
