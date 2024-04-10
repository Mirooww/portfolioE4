import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./style/leftMenuNav.css";
import "./style/app.css";
import "./style/content.css";

import { formation } from "./api/formation";
import { stage } from "./api/stage";

import getFormation from "./hooks/getFormation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
function MainPage() {
   return (
      <>
         <div className="leftMenuNav">
            <header>
               <div className="PPFrame">
                  <img src="/pictures/PP.jpeg" alt="" />
               </div>
               <h2 className="name">CHIENG</h2>
               <div className="social">
                  <div>
                     <FontAwesomeIcon icon={faGithub} style={{ height: "50%" }} />
                  </div>
                  <div>
                     <FontAwesomeIcon icon={faLinkedin} style={{ height: "50%" }} />
                  </div>
                  <div style={{ position: "relative" }}>
                     <FontAwesomeIcon icon={faFile} style={{ height: "70%" }} />
                     <p style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "8px" }}> CV </p>
                  </div>
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

export default MainPage;
