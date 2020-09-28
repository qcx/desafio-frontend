import Menu from '../../components/shared/Menu/Menu.js'
import Footer from '../../components/shared/Footer/Footer.js'

import Home from '../../containers/Home/Home.js'
import About from '../../containers/About/About.js'
import Challenge from '../../containers/Challenge/Challenge.js'

const RenderLandingPage = () => {
    return (
        Menu(),
        Home(),
        About(),
        Challenge(),
        Footer()
    )
}

export default RenderLandingPage;