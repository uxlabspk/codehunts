import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "@/components/common/header.tsx";
import Footer from "@/components/common/footer.tsx";
import BackToTop from "./components/common/back-to-top";
import ProtectedRoute from "@/components/admin/protected-route";
import { AdminAuthProvider } from "@/contexts/admin-auth-context";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/landing.tsx"));
const Portfolio = lazy(() => import("@/pages/portfolio.tsx"));
const Team = lazy(() => import("@/pages/our-team.tsx"));
const About = lazy(() => import("@/pages/about.tsx"));
const Contact = lazy(() => import("@/pages/contact-us.tsx"));
const Talk = lazy(() => import("@/pages/talk.tsx"));
const Terms = lazy(() => import("@/pages/terms-conditions.tsx"));
const NotFound = lazy(() => import("@/pages/not-found.tsx"));
const WebDev = lazy(() => import("@/pages/web-development.tsx"));
const AppDev = lazy(() => import("@/pages/app-development.tsx"));
const Graphics = lazy(() => import("@/pages/graphics-designing.tsx"));
const AI = lazy(() => import("@/pages/ai-development.tsx"));
const CloudSolutions = lazy(() => import("@/pages/cloud-solutions.tsx"));
const SoftwareConsulting = lazy(() => import("@/pages/custom-software.tsx"));
const AdminLogin = lazy(() => import("@/pages/admin/login"));
const AdminDashboard = lazy(() => import("@/pages/admin/dashboard"));

// Loading component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-orange-400"></div>
  </div>
);

function App() {
  return (
    <AdminAuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/web-development" element={<WebDev />} />
                    <Route path="/app-development" element={<AppDev />} />
                    <Route path="/ai-development" element={<AI />} />
                    <Route path="/graphics-designing" element={<Graphics />} />
                    <Route path="/cloud-solutions" element={<CloudSolutions />} />
                    <Route path="/custom-software" element={<SoftwareConsulting />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/our-team" element={<Team />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/lets-talk" element={<Talk />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/*" element={<NotFound />} />
                  </Routes>
                  <BackToTop />
                  <Footer />
                </>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AdminAuthProvider>
  );
}

export default App;
