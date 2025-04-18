
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, features, recommended, onSelect }) => (
  <div 
    className={`relative p-6 rounded-lg transition-all ${
      recommended 
        ? 'border-2 border-netflix-red bg-netflix-darkgray scale-105 shadow-xl' 
        : 'border border-gray-700 bg-netflix-gray hover:scale-105'
    }`}
  >
    {recommended && (
      <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-netflix-red text-white text-sm font-bold rounded-full">
        RECOMMENDED
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-2xl font-bold mb-4">{price}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-netflix-red mr-2 shrink-0" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      onClick={onSelect}
      className={`w-full ${
        recommended 
          ? 'bg-netflix-red hover:bg-red-700' 
          : 'bg-white text-black hover:bg-gray-200'
      }`}
    >
      Select Plan
    </Button>
  </div>
);

const Subscription: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    if (!selectedPlan) {
      toast({
        variant: "destructive",
        title: "No plan selected",
        description: "Please select a subscription plan to continue.",
      });
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, this would be an API call to your Spring Boot backend
      console.log('Subscribing to plan:', selectedPlan);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set user as subscribed
      localStorage.setItem('subscribed', 'true');
      localStorage.setItem('subscriptionPlan', selectedPlan);
      
      toast({
        title: "Subscription successful",
        description: `You are now subscribed to the ${selectedPlan} plan.`,
      });
      
      navigate('/browse');
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose the plan that's right for you</h1>
          <p className="text-xl text-gray-400">Watch anywhere. Cancel anytime.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PlanCard 
            name="Basic" 
            price="$9.99/month" 
            features={[
              "Good video quality",
              "Watch on your TV, computer, mobile phone and tablet",
              "Cancel anytime",
              "Unlimited movies and TV shows"
            ]}
            onSelect={() => setSelectedPlan('Basic')}
          />
          
          <PlanCard 
            name="Standard" 
            price="$15.49/month" 
            features={[
              "Better video quality",
              "Watch on your TV, computer, mobile phone and tablet",
              "Cancel anytime",
              "Unlimited movies and TV shows",
              "Watch on 2 screens at the same time"
            ]}
            recommended
            onSelect={() => setSelectedPlan('Standard')}
          />
          
          <PlanCard 
            name="Premium" 
            price="$19.99/month" 
            features={[
              "Best video quality",
              "Watch on your TV, computer, mobile phone and tablet",
              "Cancel anytime",
              "Unlimited movies and TV shows",
              "Watch on 4 screens at the same time",
              "Ultra HD available"
            ]}
            onSelect={() => setSelectedPlan('Premium')}
          />
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleSubscribe}
            className="bg-netflix-red hover:bg-red-700 text-white font-bold px-8 py-6 text-xl"
            disabled={isLoading || !selectedPlan}
          >
            {isLoading ? "Processing..." : "Start Subscription"}
          </Button>
          <p className="mt-4 text-gray-400">
            No commitments, cancel online anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
