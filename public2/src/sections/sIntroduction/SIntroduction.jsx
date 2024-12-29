function SIntroduction({theme = "sTheme"}){
    return(
        <>
            <section className={`container-fluid ${theme} Introduction`}>
                <div className="row">
                    <div className="col-6">
                        <h2>Marcus Guilherme Souza Campos</h2>
                        <div className="d-none d-sm-block">
                            <p>Desenvolvedor Front-End<br/>
                            <span>Novembro 2022 - Presente</span></p>
                                • Redes e contato:<br/>
                                Git - Linkedin - Indeed<br/>
                                mgsouzacampos@hotmail.com<br/>
                                +55 (21) 98063-6091<br/>

                                • Cursando Ensino Superior em:<br/>
                                Análise e Desenvolvimento de Sistemas<br/>
                                3¹ período / Agosto 2023 - Dezembro 2025<br/>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="src/assets/img/me2.jpg" alt="me" className="float-end me-md-3"/>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <div>
                        <p>Desenvolvedor Front-End<br/>
                        <span>Novembro 2022 - Presente</span></p>
                            • Redes e contato:<br/>
                            Git - Linkedin - Indeed<br/>
                            mgsouzacampos@hotmail.com<br/>
                            +55 (21) 98063-6091<br/>

                            • Cursando Ensino Superior em:<br/>
                            Análise e Desenvolvimento de Sistemas<br/>
                            3¹ período / Agosto 2023 - Dezembro 2025<br/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SIntroduction;