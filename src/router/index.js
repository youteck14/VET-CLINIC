import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Hero from "../components/Hero/Hero.js";
import GetPets from "../components/AdoptaPets/AdoptaPets.js";

const Router =()=>{

  return(

    <BrowserRouter>

      <Header/>
      <Routes>        
        <Route path="/VET-CLINIC" element={<Hero/>}/>
        <Route path="/adopta" element={<GetPets/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>

  )

}

export default Router;