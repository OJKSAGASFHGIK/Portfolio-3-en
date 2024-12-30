import './../../assets/css/css.css';

function Skills({theme="sTheme", myId=""}){
    return(
        <>
            <section id={myId} className={`container-fluid ${theme}`}>
                <h3>Proficiências:</h3>
                <div>
                    <div>
                        <table className='table'>
                            <caption>✔</caption>
                            <thead>
                                <tr>
                                    <th>Competências</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML, CSS, JS</td>
                                </tr>
                                <tr>
                                    <td>React.JS</td>
                                </tr>
                                <tr>
                                    <td>Python, POO</td>
                                </tr>
                                <tr>
                                    <td>Microsoft Office</td>
                                </tr>
                            </tbody>

                            {/*<tfoot>
                                <tr>
                                    <td></td>
                                </tr>
                            </tfoot>*/}
                        </table>
                    </div>
                    <div>
                        <table>
                            <caption>✢</caption>
                            <thead>
                                <tr>
                                    <th>Extra:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Conceitos de POO e lógicas fundamentais</td>
                                </tr>
                            </tbody>
                            {/*<caption>⟳</caption>
                            <thead>
                                <tr>
                                    <th>Atualmente estudando</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JavaScript</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                </tr>
                            </tfoot>*/}
                        </table>
                        <table>
                            <caption>●</caption>
                            <thead>
                                <tr>
                                    <th>Idiomas:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Português nativo</td>
                                </tr>
                                <tr>
                                    <td>Inglês intermediário-avançado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills