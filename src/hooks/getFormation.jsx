import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../style/app.css";
import { motion, useCycle } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

   const formationsRef = useRef(null); // Référence à la div contenant les formations

   const competences = [...new Set(formations.flatMap((formation) => formation.competences.map((c) => c.nom)))];

   const filteredFormations = selectedCompetence
      ? formations.filter((formation) => formation.competences.some((c) => c.nom === selectedCompetence))
      : formations;

   const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

   const handleButtonClick = (index) => {
      setSelectedButtonIndex(index);
      setSelectedCompetence(competences[index]);

      // Faites défiler vers le haut de la div contenant les formations
      formationsRef.current.scrollIntoView({ behavior: "instant" });
   };

   const handleVoirToutClick = () => {
      setSelectedButtonIndex(null);
      setSelectedCompetence(null);

      // Faites défiler vers le haut de la div contenant les formations
      formationsRef.current.scrollIntoView({ behavior: "instant" });
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
      <div style={{ width: "100%", display: "flex", justifyContent: "space-around", padding: "0 15px" }}>
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
            ref={formationsRef} // Référence à la div contenant les formations
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-around",
               alignItems: "flex-start",
               gap: "50px",
               width: openCategNav ? "calc(90% - 300px)" : "90%",
               color: "white",
               padding: "40px 0px",
               position: "relative",
               marginTop: "30px",
            }}
         >
            <FontAwesomeIcon
               icon={openCategNav ? faArrowLeft : faArrowRight}
               onClick={cycleOpenCategNav}
               style={{ position: "absolute", top: "0px", left: "10px", height: "30px", width: "30px" }}
            />
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
                        <div
                           style={{
                              height: "20%",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "space-around",
                              position: "relative",
                           }}
                        >
                           <h2 style={{ textAlign: "center", fontSize: "20px" }}>{selectedFormation.title}</h2>
                           <p>{selectedFormation.startdate}</p>
                        </div>

                        <div style={{ height: "80%" }}>
                           <div style={{ height: "60%" }}>
                              <img src="" alt="" />
                           </div>
                           <FontAwesomeIcon
                              icon={faXmark}
                              onClick={toggleModal}
                              style={{ position: "absolute", top: "15px", right: "15px", height: "50px", width: "50px" }}
                           />

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
