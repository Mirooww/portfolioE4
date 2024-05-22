import React, { useState, useEffect } from "react";
import { stage } from "../json/Stage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "../style/content.css";
import "../style/app.css";

export default function getStage() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(null);
    const [showModalStage, setShowModalStage] = useState(null);
    const [isFlex, setIsFlex] = useState(window.innerWidth > 962);

    useEffect(() => {
        setData(stage);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsFlex(window.innerWidth > 962);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleModal = (url) => {
        setShowModal(showModal === url ? null : url);
    };
    const toggleModalStage = (url) => {
        setShowModalStage(showModalStage === url ? null : url);
    };

    return (
        <>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="cadre columnCentered"
                    style={{ margin: "50px 0px", minHeight: "400px", justifyContent: "center", alignItems: "center" }}
                >
                    <div
                        className="flex contentCadre flexCentered"
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "300px",

                            // flexDirection: item.inverse ? "row-reverse" : "row",
                            flexDirection: isFlex ? "row" : "column",
                            margin: "0",
                            padding: "0",
                            width: "100%",
                        }}
                    >
                        <div className="picFrame flexCentered">
                            <img src={item.pic} alt={item.title} style={{ borderRadius: "10px", width: "100%" }} />
                        </div>

                        <div
                            className="zone"
                            style={{
                                width: isFlex ? "67%" : "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div className="textZone flexSpaceBetween">
                                <h2>{item.title}</h2>
                            </div>
                            <div className="footerZone flexCentered" style={{ width: "100%", justifyContent: "space-around" }}>
                                <h2 onClick={() => toggleModal(item.attest)} style={{ width: "33%" }}>
                                    Attestation
                                </h2>
                                <h2 onClick={() => toggleModalStage(item.id)} style={{ width: "33%" }}>
                                    En savoir plus
                                </h2>
                                <h2 onClick={() => toggleModal(item.rapport)} style={{ width: "33%" }}>
                                    Rapport
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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
                            onClick={() => toggleModal(null)}
                            style={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer" }}
                        />
                        <iframe src={showModal} style={{ width: "90%", height: "90%" }}></iframe>
                    </div>
                </div>
            )}
            {showModalStage && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "9999" }}>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "rgba(0 0 0 0.4)",
                            padding: "20px",
                            height: "80%",
                            width: "60%",
                            overflow: "auto",
                            display: "flex",
                        }}
                        className="shadow2"
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => toggleModalStage(null)}
                            style={{ position: "absolute", top: "15px", right: "15px", cursor: "pointer" }}
                        />
                        {showModalStage === 1 ? (
                            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
                                <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>Pour mon stage chez CIMME SODIMAT</h1>
                                <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                    - Affichage d’information client lors de la réception d’un appel téléphonique avec formulaire pour transmettre un message à
                                    un tiers
                                </p>
                                <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                    - Interface de conversion de données entrantes au format xml pour mettre à jour une base de données
                                </p>
                                <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
                                    Grâce à ce stage, j’ai pu découvrir le monde du travail, dans le domaine où je souhaite travailler, et m’a permis de
                                    comprendre les enjeux de chaque entreprise...
                                </p>
                                <h2 style={{ fontSize: "2em", marginBottom: "30px" }}>Voici les réalisations que j'ai pu faire !</h2>
                                <div style={{ width: "70%", padding: "50px 0px" }}>
                                    <img src="/stage/1er/1.png" alt="realisation premier stage" style={{ width: "100%", marginBottom: "20px" }} />
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>Soit une interface d'affichage du contenu de la base de donnée</p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Mais le plus gros du projet était, de pouvoir insérer un fichier sous format XML afin de mettre à jour cette base de
                                        donnée !
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Lors du clic sur Import XML un pop-up va s'ouvrir demandant d'insérer un fichier, avec vérification que cela soit bien
                                        un fichier XML
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Et ensuite automatiquement le fichier va être lu, vérifié, et les données nécessitant une mise à jour seront modifiés !
                                    </p>
                                </div>
                                <div style={{ width: "70%", padding: "50px 0px" }}>
                                    <img src="/stage/1er/2.png" alt="realisation premier stage" style={{ width: "100%", marginBottom: "20px" }} />
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Puis une interface, s'ouvrant automatiquement lors de l'appel d'un client sur le téléphone fixe
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>Sur cette interface de nombreuses informations sont affichés !</p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>Notamment le contact du clients</p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Mais également les différents services qu'il a auprés de CIMME SODIMAT
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Cette interface permet égalements lors de l'appel de pouvoir savoir la raison de ses différents appels, et de saisir la
                                        demande du client ET la réponse apporté
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Facilitant ainsi le dossier de la personne, si un autre conseiller prend le relais !
                                    </p>
                                    <img src="/stage/1er/3.png" alt="realisation premier stage" style={{ width: "100%", marginBottom: "20px" }} />
                                </div>
                            </div>
                        ) : (
                            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
                                <h1 style={{ fontSize: "2.5em", marginBottom: "20px" }}>Pour mon stage chez 0001</h1>
                                <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
                                    - Développement d'une application en React : Votre stagiaire sera responsable de la création d'une interface utilisateur
                                    dynamique en utilisant React. Cela inclut la conception de composants réactifs, la gestion de l'état de l'application, et
                                    l'optimisation des performances front-end.
                                </p>
                                <h2 style={{ fontSize: "2em", marginBottom: "30px" }}>Voici la réalisation que j'ai pu faire !</h2>
                                <div style={{ width: "70%", padding: "50px 0px" }}>
                                    <img src="/stage/2eme/1.png" alt="realisation premier stage" style={{ width: "100%", marginBottom: "20px" }} />
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Soit une interface style jeu vidéo pour une association de jeu en grand air !
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        L'entreprise TRIBAL, proposant AIRSOFT, ARCHERYTAG, LASERGAME, PAINTBALL
                                    </p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Le tour réalisé en ReactJS afin de pouvoir avoir une interface immersive, où lors du clic, un mouvement d'ouverture se
                                        passe, laissant place à un style parallax différent pour chaque jeux sélectionné
                                    </p>
                                    <img src="/stage/2eme/2.png" alt="realisation premier stage" style={{ width: "100%", marginBottom: "20px" }} />
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>Où l'utilisateur aura accès à plusieurs choix</p>
                                    <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
                                        Se renseigner sur le sport sélectionné, avoir des photos, changer entre le mode jour et nuit, contacter TRIBAL, et
                                        bien-sûr réserver
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
