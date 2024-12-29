import './../../assets/css/css.css';

function Objective({theme="sTheme", myId="idObjective"}){
    return(
        <>
            <section id={myId} className={`container-fluid d-flex justify-content-center align-align-items-center ${theme} Objective`}>
                <div>
                    <h2>OBJETIVO PROFISSIONAL</h2>
                    <p>
                        Iniciei minha carreira como programador em Python em abril de 2022, adquirindo uma sólida compreensão da
                        lógica de programação. A partir de novembro, comecei a me especializar mais na área de front-end, e ao
                        longo do tempo, aprofundei meu conhecimento em diversos conceitos de diferentes linguagens.
                        <br/><br/>
                        Meu objetivo profissional é aprimorar continuamente minhas habilidades como desenvolvedor e construir
                        interfaces úteis e agradáveis. No entanto, não estou buscando oportunidades exclusivamente nessa área no
                        momento, e estou aberto a novas possibilidades de trabalho.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Objective