import Img from '../../assets/img2.jpg'

function About() {
    return (
        <div className="w3-container w3-row" id="about">
            <h5 className="w3-center w3-padding-32"><span className="w3-wide">SOBRE TRUCOS TRUCK</span></h5>
            <div className="w3-container w3 w3-half" style={{ maxWidth: '700px' }}>
                <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                <div className="w3-panel w3-leftbar w3-light-grey">
                    <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                    <p>Chef, Coffeeist and Owner: Liam Brown</p>
                </div>
            </div>
            <div className='w3-content w3-half'>
                <img src={Img} style={{ width: '100%', maxWidth: '1000px' }} className="w3-margin-top" />
                <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
                <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
            </div>
        </div>
    )
}

export default About