import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./style/leftMenuNav.css";
import "./style/app.css";
import "./style/content.css";
import "./style/stars.sass";

import { motion, useCycle } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { formation } from "./json/Projets";

import getFormation from "./hooks/getFormation";

function MainPage() {
   const [openSideNav, cycleOpenSideNav] = useCycle(false, true);

   const sideVariants = {
      closed: {
         transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
         },
      },
      open: {
         transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
         },
      },
   };

   return (
      <div className="body">
         {openSideNav && (
            <motion.div className="leftMenuNav" initial="closed" animate="open" variants={sideVariants}>
               <header>
                  <div className="PPFrame">
                     <img src="/pictures/PP.jpeg" alt="photo_profil" />
                  </div>
                  <h2 className="name">Jordan LANSOY</h2>
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
            </motion.div>
         )}

         <div className="main" style={{ marginLeft: !openSideNav ? "0px" : "300px", width: !openSideNav ? "100%" : "calc(100% - 300px)" }}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="container">
               <h1 className="BigTitle">BIENVENUE SUR MON PORTFOLIO</h1>
               <button onClick={cycleOpenSideNav} style={{ position: "absolute", top: "20px", right: "20px" }}>
                  {openSideNav ? "Close" : "Open"}
               </button>
            </div>
            <div className="containerColumn">
               <div className="cadre" style={{ margin: "50px 0px" }}>
                  <h1>A Propos</h1>
                  <div className="flex contentCadre">
                     <div className="picFrame flexCentered">
                        <img src="/pictures/PP.jpeg" alt="photo_profil" />
                     </div>
                     <div className="zone">
                        <h1>Présentation</h1>
                        <div className="textZone flexSpaceBetween">
                           <p> Salut, moi c'est Jordan LANSOY</p>
                           <p>
                              Je suis actuellement étudiant en 2éme année de BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions
                              Logicielles et Application Métier) à l'EPSI de Lille.
                           </p>
                           <p>Sur mon portfolio vous retrouverez toutes les notions et projets vu lors de ces 2 années de BTS SIO.</p>

                           <p style={{ textAlign: "center" }}>Vous pourrez retrouver mon CV ici :</p>
                        </div>

                        <div className="footerZone flexCentered">
                           <h2>CV</h2>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cadreLine containerColumn" style={{ margin: "50px 0px" }}>
                  <h1>Qu'est-ce que le BTS SIO ?</h1>
                  <div className="textOnly">
                     {" "}
                     <p>
                        Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO), s'adresse à ceux qui souhaitent se former en
                        deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégré directement le marché du travail ou continuer
                        des études, dans le domaine de l'informatique.
                     </p>
                     <h3>Le BTS SIO propose deux spécialités :</h3>
                     <div className="containerOption">
                        <div className="option containerColumn">
                           <h2>🖥️ Option SISR</h2>
                           <p className="flexCentered">
                              L’option Solution d’infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques
                              (installation, maintenance, sécurité). En sortant d’un BTS SIO SISR, vous serez capables de gérer et d’administrer le réseau d’une
                              société et d’assurer sa sécurité et sa maintenance. Les techniciens supérieurs en informatique option SISR, peuvent accéder aux
                              métiers de : .
                           </p>
                           <ul className="metier">
                              <li>Administrateur systèmes et réseaux</li>
                              <li>Informaticien support et déploiement</li>
                              <li>Pilote exploitation</li>
                           </ul>
                        </div>
                        <div className="option containerColumn">
                           <h2>🖥️ Option SLAM</h2>
                           <p className="flexCentered">
                              L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges,
                              formulation des besoins et spécifications, développement, intégration au sein de la société). Les techniciens supérieurs en
                              informatique option SLAM, sont préparés aux métiers de :{" "}
                           </p>
                           <ul className="metier">
                              <li>Développeur d'applications</li>
                              <li>Concepteur d'applications</li>
                              <li>Analyste programmeur</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="projets">
               <h1> Liste des projets</h1>

               {getFormation(formation)}
            </div>
            <div className="contentLine"></div>
         </div>
      </div>
   );
}

export default MainPage;
