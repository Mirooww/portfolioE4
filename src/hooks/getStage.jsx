import React, { useState, useEffect } from "react";
import { stage } from "../json/Stage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "../style/content.css";
import "../style/app.css";

export default function getStage() {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(null);
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
                                <p>{item.descri}</p>
                            </div>
                            <div className="footerZone flexCentered" style={{ width: "100%", justifyContent: "space-around" }}>
                                <h2 onClick={() => toggleModal(item.attest)} style={{ width: "33%" }}>
                                    Attestation
                                </h2>
                                <h2 style={{ width: "33%" }}>En savoir plus</h2>
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
        </>
    );
}
