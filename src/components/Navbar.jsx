import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span className="font-semibold text-xl">lovable</span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</Link>
          <Link to="#" className="hover:text-gray-300">Vision</Link>
          <Link to="#" className="hover:text-gray-300">News</Link>
          <Link to="#" className="hover:text-gray-300">Careers</Link>
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
