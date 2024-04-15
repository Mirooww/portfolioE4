import React, { useState, useEffect } from "react";
import axios from "axios";
export default function getFormation(linkApi) {
    const [formations, setFormations] = useState([]);

    useEffect(() => {
        // Ici, nous simulons une requête API en utilisant les données importées directement
        // Dans un cas réel, vous utiliseriez axios.get(url) pour récupérer les données de l'API
        const fetchFormations = async () => {
            try {
                // Simuler une réponse d'API avec une promesse
                const response = await Promise.resolve({ data: linkApi });
                setFormations(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des formations:", error);
            }
        };

        fetchFormations();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "flex-start",
                gap: "30px", // Ceci ajoutera de l'espace entre les éléments
                width: "100%",
                boxShadow: "0 0 0 1px",
                height: "100vh",
            }}
        >
            {formations.map((formation) => (
                <div key={formation.id}>
                    <h2>{formation.title}</h2>
                    <p>{formation.description}</p>
                    <p>Date de début: {formation.startdate}</p>
                    <p>Date de fin: {formation.enddate}</p>
                    <p>Stage: {formation.stage}</p>
                    <ul>
                        {formation.Competences.map((competence, index) => (
                            <li key={index}>{competence}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
