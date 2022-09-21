import React, { useState } from "react";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar"
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import app from "./app.scss";
import Menu from "./components/menu/Menu";

function App() {
  const [menu,setmenu] = useState(false);
  return (
    <>
    <div className="app">
      

      <Topbar menu={menu} setmenu={setmenu}/>
      <Menu menu={menu} setmenu={setmenu}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>

     
      
    </div>
    </>
  );
}

export default App;
