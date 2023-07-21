import React from "react";
import "./App.css"
import Main from "./Main"
const FirstPage = () => {
  return (
    <>
    <div className="baslık">
      <h1>Teknolojik Yemekler</h1>
      <p> fırsatı kaçırma</p>
      <h4> KOD ACIKTIRIR  PIZZA, DOYURUR</h4>
      <button>Acıktım</button>
      <div>
      <img src="\mvp-banner.png" width="100%" height="20%"></img>
      </div>
      </div>
      <div className="öneri">
        <ul>
        <li>YENİ! Kore</li>
        <li> Pizza</li>
        <li> Burger</li>
        <li> Kızartmalar</li>
        <li> Fast food</li>
        <li> gazlı içecekler</li>
        </ul>
      </div>

        <div className="özel" >
          <img src="\kart-1.png" ></img>
          <h3> Özel  Lezzetus </h3>
          <p>Position: Absolute Acı Burger</p>
          <button>Sipariş Ver</button>
        </div>

        <div className="burger" >
          <img src="\kart-2.png" ></img>
          <h3> Hackathlon Burger Menü </h3>
          <button>Sipariş Ver</button>
        </div>

        <div className="kurye" >
          <img src="kart-3.png" ></img>
          <h3> Çoooook <p> hızlı npm gibi kurye</p></h3>
          <button>Sipariş Ver</button>
        </div>

<div className="menü"> 
<h4> en çok paketlenen menüler</h4>
<h3> Acıktıran Kodlara Doyuran Lezzetler</h3>
</div>
        <div className="tercih">
        <ul>
        <li>Pizza</li>
        
        <li> Burger</li>
        <li> French fries</li>
        <li> Fast food</li>
        <li> soft drinks</li>
        </ul>
      </div>
        <div className="üçlü">
        <div className="pizza">
            <img src="\food-1.png"></img>
            <p>Terminal Pizza</p>
            <ul>
                <li>4.9</li>
                <li>(200)</li>
                <li>60₺</li>
            </ul>
            </div>

            <div className="pizza">
            <img src="\food-2.png"></img>
            <p>Position Absolute Acı Pizza</p>
            <ul>
                <li>4.9</li>
                <li>(928)</li>
                <li>85₺</li>
            </ul>
            </div>

            <div className="pizza">
            <img src="\food-3.png"></img>
            <p>Terminal Pizza</p>
            <ul>
                <li>4.9</li>
                <li>(462)</li>
                <li>75₺</li>
            </ul>
            </div>
            </div>
      <div className="footer">
        <h4>Teknolojik Yemekler</h4>
      </div>
    </>
  );
};
export default FirstPage;
