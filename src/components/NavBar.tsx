
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Bell, User, Settings } from "lucide-react";
import { authService } from '@/services/authService';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check if user is logged in
    setIsLoggedIn(authService.isAuthenticated());

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    authService.logout();
    window.location.href = '/';
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 px-4 md:px-16 py-6 flex items-center justify-between",
        isScrolled ? "bg-netflix-black" : "bg-transparent"
      )}
    >
      <div className="flex items-center">
        <Link to="/" className="mr-8">
          <h1 className="text-netflix-red font-bold text-4xl">NETFLIX</h1>
        </Link>
        
        {isLoggedIn && (
          <div className="hidden md:flex space-x-4">
            <Link to="/browse" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/tvshows" className="text-white hover:text-gray-300">TV Shows</Link>
            <Link to="/movies" className="text-white hover:text-gray-300">Movies</Link>
            <Link to="/mylist" className="text-white hover:text-gray-300">My List</Link>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/backend">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-netflix-red hover:bg-red-700 text-white" asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
