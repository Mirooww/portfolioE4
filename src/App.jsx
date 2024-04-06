import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./style/leftMenuNav.css";
import "./style/app.css";
import "./style/content.css";

import { formation } from "./api/formation";
import { stage } from "./api/stage";

import getFormation from "./hooks/getFormation";

function App() {
   return (
      <>
         <div className="leftMenuNav">
            <header>
               <div className="PPFrame">
                  <img src="/pictures/PP.jpeg" alt="" />
               </div>
               <h2 className="name">Jordan LANSOY</h2>
               <div className="social">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
               </div>
            </header>
            <nav>
               <div>Accueil</div>
               <div>A Propos</div>
               <div>Parcours</div>
               <div>Epreuve E4</div>
               <div>Contact</div>
            </nav>
            <footer>
               <p> COPYRIGHT 2024 @Nexum</p>
            </footer>
         </div>
         <div className="content">
            <div className="accueil">
               <h1>BIENVENUE SUR MON PORTFOLIO</h1>
            </div>
            <div className="test">{getFormation(formation)}</div>
            <div className="test">{getFormation(stage)}</div>
         </div>
      </>
   );
}

export default App;
