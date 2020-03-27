import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import About from "../About"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Landing from "../Landing"
import Media from "../Media"

const App = () => {
    return (
        <Router>
            <Navigation />
            <main>
                <Route path={ROUTES.LANDING} exact component={Landing} />
                <Route path={ROUTES.ABOUT} component={About} />
                <Route path={ROUTES.MEDIA} component={Media} />
            </main>
            <Footer />
        </Router>
    )
}
export default App