import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "@/components/common/header.tsx";
import Footer from "@/components/common/footer.tsx";
import BackToTop from "./components/common/back-to-top";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";

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

// Admin pages
const AdminLogin = lazy(() => import("@/pages/admin/login.tsx"));
const AdminLayout = lazy(() => import("@/pages/admin/layout.tsx"));
const AdminDashboard = lazy(() => import("@/pages/admin/dashboard.tsx"));
const AdminProjects = lazy(() => import("@/pages/admin/projects.tsx"));
const ProjectForm = lazy(() => import("@/pages/admin/project-form.tsx"));
const AdminTeam = lazy(() => import("@/pages/admin/team.tsx"));
const TeamForm = lazy(() => import("@/pages/admin/team-form.tsx"));

// Loading component
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-black">
    <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-orange-400"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<Suspense fallback={<PageLoader />}><AdminLogin /></Suspense>} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Suspense fallback={<PageLoader />}>
                  <AdminLayout />
                </Suspense>
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="projects/new" element={<ProjectForm />} />
            <Route path="projects/edit/:id" element={<ProjectForm />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="team/new" element={<TeamForm />} />
            <Route path="team/edit/:id" element={<TeamForm />} />
          </Route>

          {/* Public Routes */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <Suspense fallback={<PageLoader />}>
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
                </Suspense>
                <BackToTop />
                <Footer />
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
