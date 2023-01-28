import { Route } from "@tanstack/react-location";
import AboutPage from "../pages/AboutPage";
import LandingPage from "../pages/LandingPage";
import ProjectsPage from "../pages/ProjectsPage";

const routes: Route[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
];
export default routes;
