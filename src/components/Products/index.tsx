import Img1 from '../../assets/products/img1.png'
import Img2 from '../../assets/products/img2.png'
import Img3 from '../../assets/products/img3.png'
import Img4 from '../../assets/products/img4.png'
import Img5 from '../../assets/products/img5.png'
import Fundo from '../../assets/img4.jpg'

function Products() {
    return (
        <div id='products'>
            <h3 className="w3-center w3-padding-32">PRINCIPAIS PRODUTOS</h3>
        <div className='w3-display-container w3-wide'>
            <img className="w3-image" src={Fundo}/>
            <div className="w3-display-middle w3-center">
                <div className="w3-row-padding w3-container">
                    <div className="w3-col l3 m3 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-container w3-black">Estravagante</div>
                            <img src={Img1} alt="House" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="w3-col l3 m3 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-container w3-black">Economico</div>
                            <img src={Img2} alt="House" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="w3-col l3 m3 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-container w3-black">Tecnologico</div>
                            <img src={Img4} alt="House" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="w3-col l3 m3 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-container w3-black">Luxuoso</div>
                            <img src={Img5} alt="House" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Products