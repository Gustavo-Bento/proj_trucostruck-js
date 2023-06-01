import Img from '../../assets/img2.jpg'

function About() {
    return (
        <div className="w3-container w3-row" id="about">
            <h5 className="w3-center w3-padding-32"><span className="w3-wide">SOBRE TRUCOS TRUCK</span></h5>
            <div className="w3-container w3 w3-half" style={{ maxWidth: '700px' }}>
                <p>Nossa frota de caminhões, habilmente equipada com tecnologia avançada, é como um ás na manga. Isso nos permite garantir que sua carga seja entregue com segurança e pontualidade, não importa o quão desafiador seja o trajeto.</p>
                <p>Nossa reputação é nossa melhor carta na manga. Assim como no truco, honramos nossa palavra e entregamos sua carga com integridade e transparência, mantendo a confiança de nossos clientes em cada jogada.</p>
                <div className="w3-panel w3-leftbar w3-light-grey">
                    <p><i>"Seja você um jogador novato ou um veterano no jogo do transporte internacional, a TrucosTruck Enterprises está pronta para ser sua parceira estratégica. Nossos serviços logísticos personalizados e nossa dedicação incansável garantem que você vença a partida em seu mercado.</i></p>
                    <p>Gustavo Ferreira</p>
                </div>
                <p>Faça parte do time vencedor! Entre em contato conosco hoje mesmo e descubra por que somos a escolha número um para o transporte internacional. TrucosTruck Enterprises - sua melhor aposta no mundo do transporte! Trucando desde 2023.</p>
                
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