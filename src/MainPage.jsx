import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./style/leftMenuNav.css";
import "./style/app.css";
import "./style/content.css";
import "./style/stars.sass";

import { Link, animateScroll as scroll } from "react-scroll";

import { color, motion, useCycle } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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

   const scrollToSection = (id) => {
      scroll.scrollTo(id, {
         duration: 800,
         smooth: "easeInOutQuart",
      });
   };
   return (
      <div className="body">
         {openSideNav && (
            <motion.div className="leftMenuNav" initial="closed" animate="open" variants={sideVariants} style={{ color: "black" }}>
               <header>
                  <div className="PPFrame">
                     <img src="/pictures/PP.jpeg" alt="photo_profil" />
                  </div>
                  <h2 className="name">Jordan LANSOY</h2>
                  <div className="social">
                     <div>
                        <FontAwesomeIcon icon={faGithub} style={{ height: "80%" }} />
                     </div>
                     <div>
                        <FontAwesomeIcon icon={faLinkedin} style={{ height: "80%" }} />
                     </div>
                     <div style={{ position: "relative" }}>
                        <img src="SVG/logo-cv.svg" alt="logo CV" style={{ height: "80%" }} />
                     </div>
                  </div>
               </header>
               <nav>
                  <div>
                     <Link to="accueil" smooth={true} duration={800} onClick={() => scrollToSection("accueil")}>
                        Accueil
                     </Link>
                     <hr style={{ height: "4px", width: "45%" }} />
                  </div>
                  <div>
                     <Link to="a_propos" smooth={true} duration={800} onClick={() => scrollToSection("a_propos")}>
                        A Propos
                     </Link>
                     <hr style={{ height: "4px", width: "45%" }} />
                  </div>
                  <div>
                     <Link to="parcours" smooth={true} duration={800} onClick={() => scrollToSection("parcours")}>
                        Parcours
                     </Link>
                     <hr style={{ height: "4px", width: "45%" }} />
                  </div>
                  <div>
                     <Link to="competences" smooth={true} duration={800} onClick={() => scrollToSection("competences")}>
                        Compétences
                     </Link>
                     <hr style={{ height: "4px", width: "45%" }} />
                  </div>
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
            <div className="container" id="accueil">
               <h1 className="BigTitle">BIENVENUE SUR MON PORTFOLIO</h1>

               <FontAwesomeIcon
                  icon={faBars}
                  onClick={cycleOpenSideNav}
                  style={{ position: "fixed", top: "20px", left: openSideNav ? "310px" : "20px", height: "50px", width: "50px", zIndex: "9999" }}
               />
            </div>
            <div className="containerColumn" id="a_propos">
               <div className="cadre columnCentered" style={{ margin: "50px 0px", minHeight: "400px" }}>
                  <h1>A Propos</h1>
                  <div className="flex contentCadre flexCentered">
                     <div className="picFrame flexCentered">
                        <img src="/pictures/PP.jpeg" alt="photo_profil" />
                     </div>
                     <div className="zone">
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
            </div>
            <div className="projets" id="parcours">
               <h1 style={{ textAlign: "center" }}> Liste des projets</h1>

               {getFormation(formation)}
            </div>
            <div className="cadreLine flexCentered" style={{ padding: "100px 0", flexDirection: "column" }} id="competences">
               <h1> Compétences </h1>
               <div style={{ flexWrap: "wrap", width: "60%", justifyContent: "space-around" }} className="flexCentered">
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-adobe.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-figma.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-firebase.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-github.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-mysql.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-python.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-react.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-seo.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
                  <motion.div
                     style={{ width: "75px", height: "75px", borderRadius: "100%", margin: "10px 30px", boxShadow: "0 0 0 1px", backgroundColor: "white" }}
                     className="shadow2 flexCentered"
                     whileHover={{ scale: [null, 1.5, 1.4] }}
                     transition={{ duration: 0.3 }}
                  >
                     <img src="/SVG/logo-symfony.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MainPage;
