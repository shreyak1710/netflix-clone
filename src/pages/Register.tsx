
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would be an API call to your Spring Boot backend
      // For now, we'll simulate a successful registration
      console.log('Registration attempt with:', { email, password, name });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration successful",
        description: "Your account has been created. Please select a subscription plan.",
      });
      
      // Navigate to subscription page
      navigate('/subscription');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Please try again later.",
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
        <h1 className="text-3xl font-bold text-white mb-6">
          {step === 1 ? "Create your account" : "Set up your profile"}
        </h1>
        
        {step === 1 ? (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 border-gray-700 text-white h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <p className="text-gray-400 text-sm">
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </p>
            
            <Button 
              type="submit" 
              className="w-full bg-netflix-red hover:bg-red-700 text-white font-bold py-3"
            >
              Next
            </Button>
            
            <div className="mt-4">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-white hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Name"
                className="bg-gray-800 border-gray-700 text-white h-12"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Create a password"
                className="bg-gray-800 border-gray-700 text-white h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-netflix-red hover:bg-red-700 text-white font-bold py-3"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            
            <Button 
              type="button" 
              variant="ghost" 
              className="w-full text-white"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
