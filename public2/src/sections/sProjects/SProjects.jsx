import './../../assets/css/css.css';

function SProjects({theme="sTheme", myId="idProjects"}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme} sProjects`}>
                <div>
                    <div>
                        <h3>Projetos:</h3>
                        <p className='small'>Obs: Acesse link de projetos por um desktop <br/>(Tópicos voltados para utilidade e didática)</p>
                    </div>
                    <div className='row row-cols-md-3 row-cols-2'>
                        <div>
                            <article>
                                <h4>All Notes</h4>
                                <p>Notas gerais sobre HTML, CSS e JavaScript<br/></p>
                                <a href="1.ProjectNotes\1.HTMLandCSSnotes\a1ResumeAll.html" target="_blank">Clique aqui para ver
                                    mais...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>React.JS <br/>Project</h4>
                                <p>Notas gerais sobre React.JS</p>
                                <a href="/1.projectnotes/3.learningreactjs/react-library/public/" target="_blank">Clique
                                    aqui para ver
                                    mais...</a>
                            </article>
                        </div>
                        <div>
                            <article>
                                <h4>Bootstrap <br/>Project</h4>
                                <p>Notas gerais sobre bootstrap</p>
                                <a href="/1.projectnotes/4.learningbootstrap/" target="_blank">Clique
                                    aqui para ver mais...</a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SProjects