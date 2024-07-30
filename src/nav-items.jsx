import { Home, Code } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import GPTEngineer from "./pages/GPTEngineer.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <Code className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "GPT Engineer",
    to: "/gpt-engineer",
    icon: <Code className="h-4 w-4" />,
    page: <GPTEngineer />,
  },
];
