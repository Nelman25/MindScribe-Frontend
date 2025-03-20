import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: "dashboard", element: <div>Dashboard</div> },
      { path: "new-entry", element: <div>New journal entry</div> },
      { path: "journal-entries/:id", element: <div>journal page</div> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
