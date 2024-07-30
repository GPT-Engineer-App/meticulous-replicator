import { Home, Heart, Code } from "lucide-react";
import Index from "./pages/Index.jsx";
import GPTEngineer from "./pages/GPTEngineer.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "GPT Engineer",
    to: "/gpt-engineer",
    icon: <Code className="h-4 w-4" />,
    page: <GPTEngineer />,
  },
];
