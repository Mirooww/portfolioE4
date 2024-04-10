import React, { useState, useEffect } from "react";
import axios from "axios";
export default function getFormationDescri(linkApi) {
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
         }}
      >
         {formations.map((formation) => (
            <div
               key={formation.id}
               style={{
                  width: "300px",
                  height: "400px",
                  margin: "50px", // La moitié de 100px pour avoir une marge totale de 100px entre les éléments
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Un peu d'ombre pour chaque élément
               }}
            >
               <h2>{formation.titre}</h2>
               <p>{formation.description}</p>
               <div>
                  {formation.language.map((lang, index) => (
                     <p key={index}>{lang.name}</p> // Assurez-vous d'ajouter une clé unique pour chaque élément mappé
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
}
