import './footer.scss'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__contacte'>
                    <h2>CONTACTE</h2>
                    <h4>bd.Grigore Vieru 29</h4>
                    <h4>060707002</h4>
                    <h4>web.costel@gmail.com</h4>
                </div>
                <div className='footer__map'>
                    <h4>Ne aflam aici :)</h4>
                    <a href="https://www.google.com/maps/place/Costel/@47.033604,28.8438485,17.56z/data=!4m5!3m4!1s0x0:0xf06a0b054cd835d2!8m2!3d47.0336854!4d28.8446328/" rel="map"><img src='/assets/map.png' style={{ width: "160px", height: "120px" }} /></a>
                </div>
                <div className='footer__logo'>
                    <img src='/assets/logo.png' style={{ width: "230px", height: "89px" }} />
                </div>
            </div>
            <p>{` ${year} - costel.md`}</p>
        </footer>
    );
};