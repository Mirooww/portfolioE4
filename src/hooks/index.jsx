<body>
    <div className="cadre columnCentered" style={{ margin: "50px 0px", minHeight: "400px", justifyContent: "center", alignItems: "center" }}>
        <div className="flex contentCadre flexCentered" style={{ boxShadow: "0 0 0 1px", justifyContent: "center", alignItems: "center" }}>
            <div className="zone" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className="textZone flexSpaceBetween">
                    <p> Salut, moi c'est Jordan LANSOY</p>
                    <p>
                        Je suis actuellement étudiant en 2éme année de BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et
                        Application Métier) à l'EPSI de Lille.
                    </p>
                    <p>Sur mon portfolio vous retrouverez toutes les notions et projets vu lors de ces 2 années de BTS SIO.</p>

                    <p style={{ textAlign: "center" }}>Vous pourrez retrouver mon CV ici :</p>
                </div>

                <div className="footerZone flexCentered" style={{ boxShadow: "0 0 0 1px", width: "70%", justifyContent: "space-around" }}>
                    <h2 onClick={toggleModal}>CV</h2>
                    <h2 onClick={toggleModal}>CV</h2>
                    <h2 onClick={toggleModal}>CV</h2>
                </div>
            </div>
            <div className="picFrame flexCentered">
                <img src="/stage/1er/XML.webp" alt="photo_profil" style={{ borderRadius: "10px", width: "100%" }} />
            </div>
        </div>
    </div>
</body>;
