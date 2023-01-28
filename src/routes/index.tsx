import { Route } from "@tanstack/react-location";
import AboutPage from "../pages/AboutPage";
import LandingPage from "../pages/LandingPage";

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
    path: "*",
    element: <div>Page not found</div>,
  },
];
export default routes;
