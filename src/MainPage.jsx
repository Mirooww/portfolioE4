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
                            Compétences
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
                                    <h2 onClick={toggleModalExcel}>CV</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projets">
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
