import Img1 from '../../assets/products/img1.png'
import Img2 from '../../assets/products/img2.png'
import Img4 from '../../assets/products/img4.png'
import Img5 from '../../assets/products/img5.png'
import './index.css'

function Products() {
    return (
        <div id='products'>
            <h3 className="w3-center w3-padding-32">PRINCIPAIS PRODUTOS</h3>
            <div className='parallax2'></div>
            <div className='w3-display-bottommiddle'>
                <div className="w3-margin-top">
                        <span className="w3-container">
                            <div className="w3-center">
                                <div className="w3-col l3 m3 w3-margin-bottom">
                                    <div>
                                        <img src={Img1} alt="House" style={{ width: '100%' }} />
                                        <div className="w3-wide w3-hide-small w3-text-light-grey">Estravagante</div>
                                        
                                    </div>
                                </div>
                                <div className="w3-col l3 m3 w3-margin-bottom">
                                    <div>
                                        <img src={Img2} alt="House" style={{ width: '100%' }} />
                                        <div className="w3-wide w3-hide-small w3-text-light-grey">Economico</div>
                                        
                                    </div>
                                </div>
                                <div className="w3-col l3 m3 w3-margin-bottom">
                                    <div>
                                        <img src={Img4} alt="House" style={{ width: '100%' }} />
                                        <div className="w3-wide w3-hide-small w3-text-light-grey">Tecnologico</div>
                                        
                                    </div>
                                </div>
                                <div className="w3-col l3 m3 w3-margin-bottom">
                                    <div>
                                        <img src={Img5} alt="House" style={{ width: '100%' }} />
                                        <div className="w3-wide w3-hide-small w3-text-light-grey">Luxuoso</div>
                                        
                                    </div>
                                </div>
                            </div>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Products