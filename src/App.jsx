import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import AI from "./pages/AI"
import WebDev from "./pages/WebDev.jsx";
import AppDev from "./pages/AppDev.jsx";
import Graphics from "./pages/Graphics.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import Talk from "./pages/Talk.jsx";
import SoftwareConsulting from "./pages/SoftwareConsulting.jsx";
import CloudSolutions from "./pages/CloudSolutions.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/ai"} element={<AI />} />
                <Route path={"/web-development"} element={<WebDev />} />
                <Route path={"/app-development"} element={<AppDev />} />
                <Route path={"/graphics-designing"} element={<Graphics />} />
                <Route path={"/software-consulting"} element={<SoftwareConsulting />} />
                <Route path={"/cloud-solution"} element={<CloudSolutions />} />
                <Route path={"/portfolio"} element={<Portfolio />} />
                <Route path={"/our-team"} element={<Team />} />
                <Route path="/about-us" element={<About />} />
                <Route path={"/contact-us"} element={<Contact />} />
                <Route path={"/lets-talk"} element={<Talk />} />
                <Route path={"/*"} element={<NotFound />} />
            </Routes>
        </Router>
    )  
}

export default App
