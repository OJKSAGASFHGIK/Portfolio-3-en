import './../../assets/css/css.css';

function Objective({theme="sTheme", myId="idObjective"}){
    return(
        <>
            <section id={myId} className={`container-fluid d-flex justify-content-center align-align-items-center ${theme} Objective`}>
                <div>
                    <h2>PROFESSIONAL OBJECTIVE</h2>
                    <p>
                        I started my career as a Python programmer in April 2022, building a solid understanding of programming logic. In November, I began specializing more in front-end development, and over time, I deepened my knowledge of various concepts across different languages.
                        <br/><br/>
                        My professional goal is to continuously improve my skills as a developer and create useful, enjoyable interfaces. However, I’m not currently looking for opportunities exclusively in this field and am open to new job possibilities.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Objective