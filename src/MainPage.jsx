import { BrowserRouter as Route, Routes } from "react-router-dom";
import "./style/leftMenuNav.css";
import "./style/app.css";
import "./style/content.css";
import "./style/stars.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { formation } from "./json/Projets";

import fetchJson from "./hooks/fetchJson";
import getFormation from "./hooks/getFormation";
function MainPage() {
    return (
        <div className="corps">
            <div className="leftMenuNav">
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
            </div>

            <div className="content">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className="accueil">
                    <h1 className="title">BIENVENUE SUR MON PORTFOLIO</h1>
                </div>
                <div className="APropos">
                    <div className="AProposContainer">
                        <div className="Cadre">
                            <h1 className="title">A Propos</h1>
                            <div className="PresentationBox">
                                <div className="picturesFrame">
                                    <img src="/pictures/PP.jpeg" alt="photo_profil" />
                                </div>
                                <div className="PresentationContent">
                                    <h2>Présentation</h2>
                                    <p> Salut, moi c'est Jordan LANSOY</p>
                                    <p>
                                        Je suis actuellement étudiant en 2éme année de BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions
                                        Logicielles et Application Métier) à l'EPSI de Lille.
                                    </p>
                                    <p>Sur mon portfolio vous retrouverez toutes les notions et projets vu lors de ces 2 années de BTS SIO.</p>

                                    <p>Vous pourrez retrouver mon CV ici :</p>
                                    <div className="cvContainer">
                                        <div className="cv">
                                            <h2>CV</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BtsSIO">
                        <h1> Qu'est-ce-que le BTS SIO</h1>
                        <div>
                            {" "}
                            <p>
                                Le BTS Services Informatiques aux Organisations (SIO) est un diplôme qui prépare en deux ans aux carrières dans l’informatique,
                                soit en tant qu’administrateur réseau, soit en tant que développeur.
                            </p>
                            <p>
                                Ce cursus est idéal pour ceux qui visent une insertion professionnelle rapide ou qui envisagent de poursuivre leurs études dans
                                le secteur informatique.
                            </p>
                            <p>Le programme du BTS SIO se divise en deux options :</p>
                        </div>

                        <div className="containerBTS">
                            <p>
                                Option SISR (Solutions d’Infrastructure, Systèmes et Réseaux) : Cette spécialité vise à former des experts en réseaux et
                                systèmes informatiques, couvrant l’installation, la maintenance et la sécurité. Les diplômés de cette option sont qualifiés pour
                                administrer et sécuriser les réseaux d’entreprise. Les carrières accessibles incluent : Administrateur de systèmes et réseaux
                                Technicien support et déploiement Responsable d’exploitation Technicien support systèmes et réseaux Technicien d’infrastructure
                                Technicien de production
                            </p>
                            <p>
                                Technicien micro et réseaux Option SLAM (Solutions Logicielles et Applications Métiers) : Cette spécialité, que vous avez
                                choisie, forme des professionnels du logiciel, de la conception à l’intégration en entreprise, en passant par la rédaction de
                                spécifications et le développement. Les métiers envisageables pour les diplômés SLAM sont : Développeur d’applications
                                informatiques Développeur Analyste d’applications ou d’études Analyste programmeur Programmeur analyste Programmeur
                                d’applications Responsable des services applicatifs Technicien d’études informatiques Le BTS SIO offre ainsi une formation
                                solide pour ceux qui aspirent à évoluer dans le domaine dynamique et en constante évolution de l’informatique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="test">{getFormation(formation)}</div>
            </div>
        </div>
    );
}

export default MainPage;
