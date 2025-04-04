import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WriteJournalEntry from "./pages/WriteJournalEntry";

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
      { path: "dashboard", element: <Dashboard /> },
      { path: "new-entry", element: <WriteJournalEntry /> },
      { path: "journal-entries/:id", element: <div>journal page</div> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
