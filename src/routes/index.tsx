import { Route } from "@tanstack/react-location";
import LandingPage from "../pages/LandingPage";

const routes: Route[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
];
export default routes;
