import './../../assets/css/css.css';

function SFooter({theme="bTheme", myId=""}){
    return(
        <>
            <footer className={`d-flex justify-content-center align-items-center ${theme}`}><span className='pe-1 UwU'>♡</span> Kindly made by Marcus Guilherme</footer>
        </>
    );
}

export default SFooter