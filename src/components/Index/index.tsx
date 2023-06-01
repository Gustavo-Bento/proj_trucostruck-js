import '../../index.css'
import Header from '../Header/index'
import Products from '../Products/index'
import About from '../About/index'
import Video from '../Video'
import Contact from '../Contact'

function Index() {
    return (
        <div>
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1600px', minWidth: '500px' }} id="home">
                <Header />
            </header>
            
            <About />
            <div className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1600px', minWidth: '500px' }} id="product">
            <Products />
            </div>
            <Video />
            <Contact />
        </div>
    )
}
export default Index