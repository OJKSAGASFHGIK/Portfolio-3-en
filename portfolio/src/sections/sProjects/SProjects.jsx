function SProjects({theme="sTheme", myId="idProjects"}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme} sProjects`}>
                <div>
                    <div>
                        <h3>Projects:</h3>
                        <p className='small'><strong>Note: Access the link projects for a Desktop: </strong><br/><em>Topics focused on usefulness and didactics</em></p>
                    </div>
                    <div className='row row-cols-md-3 row-cols-2'>
                        <div>
                            <article>
                                <h4>All Notes</h4>
                                <p>General notes about HTML, CSS and JavaScript<br/></p>
                                <a href="https://greque-portfolio.netlify.app/projects/1.ProjectNotes/1.HTMLandCSSnotes/a1ResumeAll.html" target="_blank">Click here to see more...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>React.JS <br/>Project</h4>
                                <p>General notes about React.JS</p>
                                <a href="https://greque-portfolio.netlify.app/projects/1.projectnotes/3.learningreactjs/react-library/public/" target="_blank">Clique
                                Click here to see more......</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>Bootstrap <br/>Project</h4>
                                <p>General notes about Bootstrap</p>
                                <a href="https://greque-portfolio.netlify.app/projects/1.projectnotes/4.learningbootstrap/" target="_blank">Click here to see more...</a>
                            </article>
                        </div>
                        {/*
                        <div>
                            <article>
                                <h4>a1</h4>
                                <p>Bolo de cenoura</p>
                                <a href="./../../../../a1BoloDeCenoura.html" target="_blank">Clique
                                    aqui para ver mais...</a>
                            </article>
                        </div>
                        */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default SProjects