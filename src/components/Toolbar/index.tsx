function Toolbar() {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-black w3-wide w3-padding w3-card">
                <a href="#home" className="w3-bar-item w3-button"><b>TR</b> Truco's Truck</a>
                <div className="w3-right w3-hide-small">
                    <a href="#products" className="w3-bar-item w3-button">Products</a>
                    <a href="#about" className="w3-bar-item w3-button">About</a>
                    <a href="#video" className="w3-bar-item w3-button">Video</a>
                    <a href="#contact" className="w3-bar-item w3-button">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Toolbar