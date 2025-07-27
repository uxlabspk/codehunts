import {BrowserRouter, Routes, Route} from "react-router";
import Home from "@/pages/landing.tsx";
import Portfolio from "@/pages/portfolio.tsx";
import Team from "@/pages/our-team.tsx";
import About from "@/pages/about.tsx";
import Contact from "@/pages/contact-us.tsx";
import Talk from "@/pages/talk.tsx";
import Terms from "@/pages/terms-conditions.tsx";
import NotFound from "@/pages/not-found.tsx";
import WebDev from "@/pages/web-development.tsx";
import AppDev from "@/pages/app-development.tsx";
import Graphics from "@/pages/graphics-designing.tsx";
import AI from "@/pages/ai-development.tsx";
import CloudSolutions from "@/pages/cloud-solutions.tsx";
import SoftwareConsulting from "@/pages/custom-software.tsx";
import Header from "@/components/common/header.tsx";
import Footer from "@/components/common/footer.tsx";


function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/web-development'} element={<WebDev />} />
              <Route path={'/app-development'} element={<AppDev />} />
              <Route path={'/ai-development'} element={<AI />} />
              <Route path={'/graphics-designing'} element={<Graphics />} />
              <Route path={'/cloud-solutions'} element={<CloudSolutions />} />
              <Route path={'/custom-software'} element={<SoftwareConsulting />} />
              <Route path={'/portfolio'} element={<Portfolio />} />
              <Route path={'/our-team'} element={<Team />} />
              <Route path={'/about-us'} element={<About />} />
              <Route path={'/contact-us'} element={<Contact />} />
              <Route path={'/lets-talk'} element={<Talk />} />
              <Route path={'/terms'} element={<Terms />} />
              <Route path={'/*'} element={<NotFound />} />
          </Routes>
          <Footer />
      </BrowserRouter>
  )
}

export default App
