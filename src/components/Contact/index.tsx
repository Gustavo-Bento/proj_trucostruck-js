function Contact() {
    return (
        <div className="w3-container w3-content w3-padding-32" id="contact">
            <h3 className="w3-center w3-padding-32">CONTATO</h3>
            <p>Preencha o formulario para mais informações sobre nossa frota</p>
            <form action="/action_page.php" target="_blank">
                <input className="w3-white w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                <input className="w3-white w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
                <input className="w3-white w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
                <input className="w3-white w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
                <button className="w3-button w3-black w3-section" type="submit">
                    <i className="fa fa-paper-plane"></i> Enviar
                </button>
            </form>
        </div>
    )
}

export default Contact