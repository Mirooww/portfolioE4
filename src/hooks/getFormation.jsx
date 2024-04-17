import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/app.css";
import { motion, useCycle } from "framer-motion";
export default function getFormation(linkApi) {
   const [formations, setFormations] = useState([]);
   const [selectedCompetence, setSelectedCompetence] = useState(null);
   const [hoveredId, setHoveredId] = useState(null);
   const [showModal, setShowModal] = useState(false);
   const [selectedFormation, setSelectedFormation] = useState([]);

   const [openCategNav, cycleOpenCategNav] = useCycle(false, true);

   useEffect(() => {
      const fetchFormations = async () => {
         try {
            const response = await Promise.resolve({ data: linkApi });
            setFormations(response.data);
         } catch (error) {
            console.error("Erreur lors de la récupération des formations:", error);
         }
      };

      fetchFormations();
   }, []);

   const competences = [...new Set(formations.flatMap((formation) => formation.competences.map((c) => c.nom)))];

   const filteredFormations = selectedCompetence
      ? formations.filter((formation) => formation.competences.some((c) => c.nom === selectedCompetence))
      : formations;

   const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

   const handleButtonClick = (index) => {
      setSelectedButtonIndex(index);
      setSelectedCompetence(competences[index]);
   };

   const handleVoirToutClick = () => {
      setSelectedButtonIndex(null);
      setSelectedCompetence(null);
   };

   const toggleModal = (formation) => {
      setShowModal(!showModal);
      setSelectedFormation(formation);
   };

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
      <div style={{ boxShadow: "0 0 0 1px", width: "100%", display: "flex", justifyContent: "space-around", padding: "0 50px" }}>
         {openCategNav && (
            <motion.div
               style={{
                  width: "300px",
                  display: "flex",
                  flexWrap: "wrap",
                  position: "sticky",
                  top: "100px",
                  height: "600px",
                  justifyContent: "center",
                  alignItems: "center",
               }}
               className="shadow2"
               initial="closed"
               animate="open"
               variants={sideVariants}
            >
               <div
                  onClick={handleVoirToutClick}
                  style={{
                     width: "90%",
                     height: "50px",
                     textDecoration: selectedButtonIndex === null ? "underline" : "none",
                     color: selectedButtonIndex === null ? "violet" : "white",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                  }}
               >
                  Voir tout
               </div>
               {competences.map((competence, index) => (
                  <div
                     key={index}
                     onClick={() => handleButtonClick(index)}
                     style={{
                        width: "90%",
                        height: "50px",
                        textDecoration: selectedButtonIndex === index ? "underline" : "none",
                        color: selectedButtonIndex === index ? "violet" : "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                     }}
                  >
                     {competence}
                  </div>
               ))}
            </motion.div>
         )}
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-around",
               alignItems: "flex-start",
               gap: "30px",
               width: "calc(90% - 300px)",
               color: "white",
               padding: "40px 0px",
            }}
         >
            <button onClick={cycleOpenCategNav}>{openCategNav ? "Close" : "Open"}</button>
            {filteredFormations.map((formation) => (
               <div
                  key={formation.id}
                  style={{
                     width: "300px",
                     height: "400px",
                     boxShadow: hoveredId === formation.id ? "0 0 7px 8px rgba(112, 10, 97, 0.8)" : "0 0 7px 2px rgba(255, 255, 255, 0.5)",
                  }}
                  className="shadow2"
                  onMouseEnter={() => setHoveredId(formation.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => toggleModal(formation)}
               >
                  <div style={{ height: "20%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
                     <h2 style={{ textAlign: "center", fontSize: "20px" }}>{formation.title}</h2>
                     <p>{formation.startdate}</p>
                  </div>

                  <div style={{ height: "80%" }}>
                     <div style={{ height: "60%" }}>
                        <img src="" alt="" />
                     </div>
                     <div
                        style={{
                           height: "40%",
                           display: "flex",
                           flexDirection: "column",
                           alignItems: "center",
                           justifyContent: "space-around",
                        }}
                     >
                        <p>{formation.enddate}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         {showModal && (
            <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "9999" }}>
               <div
                  style={{
                     position: "absolute",
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                     backgroundColor: "rgba(0, 0, 0, 0.7)",
                     padding: "20px",
                     height: "60%",
                     width: "70%",
                     overflow: "auto", // Ajout pour permettre le défilement si le contenu est trop grand
                     color: "white",
                  }}
                  className="shadow2"
               >
                  {selectedFormation && ( // Vérifie si selectedFormation existe
                     <>
                        <div style={{ height: "20%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
                           <h2 style={{ textAlign: "center", fontSize: "20px" }}>{selectedFormation.title}</h2>
                           <p>{selectedFormation.startdate}</p>
                        </div>

                        <div style={{ height: "80%" }}>
                           <div style={{ height: "60%" }}>
                              <img src="" alt="" />
                           </div>
                           <button onClick={toggleModal}>Fermer</button>

                           <div
                              style={{
                                 height: "40%",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center",
                                 justifyContent: "space-around",
                              }}
                           >
                              <div>{selectedFormation.description}</div>
                              <div style={{ boxShadow: "0 0 0 1px", width: "99%", display: "flex", justifyContent: "space-around" }}>
                                 {selectedFormation.competences.map((formationCompetences, index) => (
                                    <p key={index} style={{ width: "300px", boxShadow: "0 0 0 1px", textAlign: "center" }}>
                                       {formationCompetences.nom}
                                    </p>
                                 ))}
                              </div>
                              <p>{selectedFormation.enddate}</p>
                           </div>
                        </div>
                     </>
                  )}
               </div>
            </div>
         )}
      </div>
   );
}
