import React ,{useState} from 'react';
import "./App.css";
import {Link} from "react-router-dom"

const Main = () => {
  const [size, setSize] = useState("");
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className='mainsf'>
    <div className='secondpage'>
        <h3>Teknolojik Yemekler</h3>
        <img src='\adv-form-banner.png' ></img>
      <div className="secenek2">
        <nav>
        <ul>
          <li><Link to= "/">Anasayfa</Link></li>
          <li>  <Link to= "/">Seçenekler</Link></li>
          <li>  <Link to= "/Main" style={{ fontWeight: "bold" }}> Sipariş Oluştur </Link></li>
        </ul>
        </nav>
      </div>
      <h4>Position Absolute Acı Pizza</h4>
      <h4>85,50 ₺</h4>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>
    </div>
        <div className='secim'>
          <form>
           
            <label htmlFor="size-dropdown">
            Boyut Seç<span className="required">*</span>{" "}
          </label>
      
       
          </form>

        </div>
    </div>

  )
}
export default Main;
