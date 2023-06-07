import Logo from '../../assets/logo.png'
import './index.css'

function Header() {
    return (
        <div className='w3-container'>
            <div className='parallax w3-display-container'></div>
            <div className="w3-display-right w3-margin-top w3-center">
                <h2 className="w3-xxlarge w3-text-white w3-content">
                    <span className="w3-padding w3-opacity-min">
                        <img src={Logo} alt="Logo" width={'12%'} />
                    </span></h2>
                <span className="w3-hide-small w3-text-light-grey">TrucosTruck</span>
            </div>
            <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                <h5 className="w3-hide-small w3-text-light-grey">A Primeira Vale Um Caminhão</h5>
            </div>
        </div>
    )
}

export default Header