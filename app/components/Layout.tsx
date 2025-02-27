// app/components/layout.tsx

import { ReactNode } from "react";
import { Link } from "@remix-run/react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow">
        <nav className="container mx-auto p-2 flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-lg font-bold">
            <Link to="/" className="flex items-center">
              <img
                src="/snowblower_sm.png"
                alt="Snowblower"
                className="max-w-[40px] mr-2"
              />
              <span>Magnus</span>
            </Link>
          </h1>
          
          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Dynamic Content */}
      <main className="flex-grow container mx-auto">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Magnus. All rights reserved.</p>
        <text>Reach out 🤙</text>
      </footer>
    </div>
  );
}


// Darkmode
{/* 
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

<div id="hello" className={isDarkMode ? "dark" : "light"}>
  <Button variant="default" onClick={toggleDarkMode}>
    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </Button>
</div> */}