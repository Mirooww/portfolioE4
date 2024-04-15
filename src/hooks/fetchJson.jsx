import React, { useState, useEffect } from "react";
import { formation } from "../json/Projets";

const fetchJson = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Ici, nous simulons une requête API en utilisant les données importées directement
        // Dans un cas réel, vous utiliseriez axios.get(url) pour récupérer les données de l'API
        const fetchFormations = async () => {
            try {
                // Simuler une réponse d'API avec une promesse
                const response = await Promise.resolve(formation);
                setProjects(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des formations:", error);
            }
        };

        fetchFormations();
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <p>Date de début: {project.startdate}</p>
                    <p>Date de fin: {project.enddate}</p>
                    <p>Stage: {project.stage}</p>
                    <ul>
                        {project.Competences.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default fetchJson;
