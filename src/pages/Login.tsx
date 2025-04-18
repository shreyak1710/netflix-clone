
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { authService } from '@/services/authService';
import { LoginRequest } from '@/types/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const loginData: LoginRequest = {
        email,
        password
      };

      const response = await authService.login(loginData);
      
      // Store the token and user data
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify({
        id: response.id,
        email: response.email,
        name: response.name
      }));
      
      toast({
        title: "Login successful",
        description: "Welcome back to Netflix!",
      });
      
      navigate('/browse');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 netflix-gradient">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-md p-8 bg-black bg-opacity-80 rounded-md">
        <h1 className="text-3xl font-bold text-white mb-6">Sign In</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email or phone number"
              className="bg-gray-800 border-gray-700 text-white h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="bg-gray-800 border-gray-700 text-white h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-netflix-red hover:bg-red-700 text-white font-bold py-3"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="hover:underline">Need help?</a>
          </div>
        </form>
        
        <div className="mt-8">
          <p className="text-gray-400">
            New to Netflix?{' '}
            <Link to="/register" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
          
          <p className="text-gray-400 text-sm mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
