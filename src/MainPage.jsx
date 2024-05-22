import "./style/leftMenuNav.css";
import "./style/app.css";
import "./style/content.css";
import "./style/stars.sass";

import { Link, animateScroll as scroll } from "react-scroll";

import { motion, useCycle } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { formation } from "./json/Projets";

import getFormation from "./hooks/getFormation";
import getStage from "./hooks/getStage";

import { useInView } from "react-intersection-observer";

import { useState, useEffect } from "react";

function MainPage() {
    const [openSideNav, setOpenSideNav] = useState(window.innerWidth > 962);
    useEffect(() => {
        const handleResize = () => {
            setOpenSideNav(window.innerWidth > 962);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

    const [activeSection, setActiveSection] = useState("");

    const scrollToSection = (id) => {
        scroll.scrollTo(id, {
            duration: 800,
            smooth: "easeInOutQuart",
        });
    };

    const [accueilRef, accueilInView] = useInView({ threshold: 0.5 });
    const [aProposRef, aProposInView] = useInView({ threshold: 0.5 });
    const [parcoursRef, parcoursInView] = useInView({ threshold: 0.5 });
    const [competencesRef, competencesInView] = useInView({ threshold: 0.5 });
    const [stageRef, stageInView] = useInView({ threshold: 0.5 });
    const [veilleRef, veilleInView] = useInView({ threshold: 0.5 });

    const toggleSideNav = () => {
        setOpenSideNav(!openSideNav);
    };

    const [showModal, setShowModal] = useState(false);
    const [cv, setCv] = useState("");
    const toggleModalCv = () => {
        setShowModal(!showModal);
        setCv("CV.pdf");
    };
    const toggleModalExcel = () => {
        setShowModal(!showModal);
        setCv("excelPortfolio.pdf");
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
                            <a href="https://github.com/Mirooww">
                                <FontAwesomeIcon icon={faGithub} style={{ height: "80%" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/jordan-lansoy/">
                                <FontAwesomeIcon icon={faLinkedin} style={{ height: "80%" }} />
                            </a>
                            <div onClick={toggleModalCv}>
                                <img src="SVG/logo-cv.svg" alt="logo CV" style={{ height: "80%" }} />
                            </div>
                        </div>
                    </header>
                    <nav>
                        <Link
                            to="accueil"
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToSection("accueil")}
                            className={activeSection === "accueil" ? "active" : "Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: accueilInView ? "red" : "black" }}
                        >
                            Accueil
                        </Link>
                        <Link
                            to="a_propos"
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToSection("a_propos")}
                            className={activeSection === "a_propos" ? "active" : "Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: aProposInView ? "red" : "black" }}
                        >
                            A Propos
                        </Link>
                        <Link
                            to="parcours"
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToSection("parcours")}
                            className={activeSection === "parcours" ? "active" : "Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: parcoursInView ? "red" : "black" }}
                        >
                            Projets
                        </Link>
                        <Link
                            to="competences"
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToSection("competences")}
                            className={activeSection === "competences" ? "active" : "Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: competencesInView ? "red" : "black" }}
                        >
                            Compétences
                        </Link>
                        <Link
                            to="stage"
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToSection("stage")}
                            className={activeSection === "competences" ? "active" : "Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: stageInView ? "red" : "black" }}
                        >
                            Stages
                        </Link>
                        <Link
                            to="veille"
                            smooth={true}
                            duration={800}
                            onClick={() => scrollToSection("veille")}
                            className={activeSection === "competences" ? "active" : "Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: veilleInView ? "red" : "black" }}
                        >
                            Veilles
                        </Link>
                        <div
                            onClick={toggleModalExcel}
                            className={"Categs"}
                            style={{ fontSize: "24px", fontWeight: "700", color: stageInView ? "red" : "black" }}
                        >
                            EXCEL
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
                <div className="container" id="accueil" ref={accueilRef}>
                    <h1 className="BigTitle" style={{ textAlign: "center" }}>
                        BIENVENUE SUR MON PORTFOLIO
                    </h1>

                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={toggleSideNav}
                        style={{ position: "fixed", top: "20px", left: openSideNav ? "310px" : "20px", height: "50px", width: "50px", zIndex: "9999" }}
                    />
                </div>
                <div className="containerColumn" id="a_propos" ref={aProposRef}>
                    <div className="cadre columnCentered" style={{ margin: "50px 0px", minHeight: "400px" }}>
                        <h1>A Propos</h1>
                        <div className="flex contentCadre flexCentered" style={{ flexDirection: openSideNav ? "row" : "column" }}>
                            <div className="picFrame flexCentered">
                                <img src="/pictures/PP.jpeg" alt="photo_profil" />
                            </div>
                            <div className="zone" style={{ width: openSideNav ? "67%" : "100%" }}>
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
                                    <h2 onClick={toggleModalCv}>CV</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projets" style={{ minHeight: "700px" }}>
                    <h1 style={{ textAlign: "center" }} id="parcours" ref={parcoursRef}>
                        Liste des projets
                    </h1>

                    {getFormation(formation)}
                </div>
                <div className="cadreLine flexCentered" style={{ padding: "100px 0", flexDirection: "column" }} id="competences" ref={competencesRef}>
                    <h1> Compétences </h1>
                    <div style={{ flexWrap: "wrap", width: "60%", justifyContent: "space-around" }} className="flexCentered">
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-adobe.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-figma.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-firebase.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-github.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-mysql.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-python.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-react.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-seo.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                        <motion.div
                            style={{
                                width: "75px",
                                height: "75px",
                                borderRadius: "100%",
                                margin: "10px 30px",
                                boxShadow: "0 0 0 1px",
                                backgroundColor: "white",
                            }}
                            className="shadow2 flexCentered"
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src="/SVG/logo-symfony.svg" alt="logo-adobe" style={{ width: "90%", height: "90%" }} />
                        </motion.div>
                    </div>
                </div>
                <div className="containerColumn" id="stage" ref={stageRef}>
                    {getStage()}
                </div>
                <div className="cadreLine containerColumn" id="veille" ref={veilleRef}>
                    <h1 style={{ padding: "40px 0px" }}>Veilles technologiques</h1>
                    <h3 style={{ padding: "40px 0px" }}>Mon sujet : L'IA dans l'espace</h3>

                    <p style={{ width: "90%", textAlign: "center" }}>
                        L'intelligence artificielle (IA) transforme profondément l'exploration spatiale, offrant des capacités améliorées pour la gestion des
                        missions, l'analyse des données, et la conception technologique. Voici une exploration plus détaillée et reformulée des applications de
                        l'IA dans l'espace :
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", width: "90%", justifyContent: "space-around", padding: "40px 0px" }}>
                        <div
                            style={{
                                width: "350px",
                                minHeight: "350px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                        >
                            <h1 style={{ textAlign: "center" }}>Analyse de Données</h1>
                            <p>
                                L'espace est une source inépuisable de données, allant des images capturées par les télescopes aux signaux recueillis par les
                                satellites. L'IA excelle dans la gestion de ces vastes volumes de données, offrant des capacités d'analyse avancées qui
                                permettent de découvrir de nouvelles exoplanètes, d'étudier des phénomènes astrophysiques complexes, et de cartographier des
                                galaxies lointaines. Cette technologie accélère le traitement des données, libérant ainsi les astronomes des contraintes de
                                l'analyse manuelle et leur permettant de se concentrer sur des questions scientifiques plus profondes.
                            </p>
                        </div>
                        <div
                            style={{
                                width: "350px",
                                minHeight: "350px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                        >
                            <h1 style={{ textAlign: "center" }}>Navigation Autonome</h1>
                            <p>
                                Dans l'environnement inexploré et souvent dangereux de l'espace, l'IA fournit des solutions critiques pour la navigation
                                autonome des vaisseaux spatiaux. Elle planifie les trajectoires, optimise les parcours en tenant compte des limitations de
                                carburant et de temps, et effectue un évitement dynamique des obstacles. Ce niveau d'autonomie est crucial, notamment pour
                                l'exploration de surfaces planétaires hostiles ou pour les manœuvres autour des astéroïdes.
                            </p>
                        </div>
                        <div
                            style={{
                                width: "350px",
                                minHeight: "350px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                        >
                            <h1 style={{ textAlign: "center" }}>Maintenance Prédictive</h1>
                            <p>
                                L'IA augmente la fiabilité des missions spatiales grâce à la maintenance prédictive. En analysant continuellement les données
                                issues des capteurs des vaisseaux, l'IA peut prévoir les défaillances avant qu'elles ne surviennent, permettant ainsi des
                                interventions de maintenance proactives qui minimisent les risques d'interruption critique et prolongent la durée de vie des
                                équipements spatiaux.
                            </p>
                        </div>
                        <div
                            style={{
                                width: "350px",
                                minHeight: "350px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                        >
                            <h1 style={{ textAlign: "center" }}>Découverte de Planètes</h1>
                            <p>
                                L'IA aide les scientifiques à détecter et à analyser des exoplanètes potentiellement habitables. Elle traite et interprète les
                                signaux faibles captés par les télescopes pour identifier des planètes en orbite autour d'étoiles distantes. De plus, elle
                                analyse les données atmosphériques et les caractéristiques physiques pour évaluer l'habitabilité des planètes découvertes
                            </p>
                        </div>
                        <div
                            style={{
                                width: "350px",
                                minHeight: "350px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                        >
                            <h1 style={{ textAlign: "center" }}>Conception de Vaisseaux Spatiaux</h1>
                            <p>
                                L'IA joue un rôle transformateur dans la conception de vaisseaux spatiaux. Elle utilise des algorithmes d'optimisation pour
                                développer des designs qui maximisent l'efficacité du carburant et minimisent le poids, tout en assurant la robustesse
                                nécessaire pour survivre aux conditions extrêmes de l'espace. De plus, l'IA aide à développer de nouveaux matériaux adaptés aux
                                défis spécifiques des voyages spatiaux.
                            </p>
                        </div>
                        <div
                            style={{
                                width: "350px",
                                minHeight: "350px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                            }}
                        >
                            <h1 style={{ textAlign: "center" }}>Perspectives Futures</h1>
                            <p>
                                Avec l'avancée continue de l'IA, l'avenir de l'exploration spatiale semble prometteur. On envisage des missions habitées plus
                                sûres et plus efficaces vers Mars et au-delà, l'exploitation des astéroïdes pour des ressources précieuses, et la construction
                                de bases autonomes sur des corps célestes comme la Lune ou Mars. L'IA continuera d'être un pilier central dans la réalisation de
                                ces objectifs ambitieux, poussant les frontières de ce que l'humanité peut atteindre dans l'espace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "9999" }}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "transparent",
                            padding: "20px",
                            height: "80%",
                            width: "60%",
                            overflow: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        className="shadow2"
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleModalExcel(null)}
                            style={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer" }}
                        />
                        <iframe src={cv} style={{ width: "90%", height: "90%" }}></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPage;
