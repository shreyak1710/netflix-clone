
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import NavBar from "@/components/NavBar";

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full bg-netflix-gray p-5 text-left text-xl font-medium hover:bg-gray-700 transition-colors"
      >
        {question}
        <span>{isOpen ? "×" : "+"}</span>
      </button>
      {isOpen && (
        <div className="bg-netflix-gray mt-px p-5 text-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

const features = [
  {
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    reverse: false
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    reverse: true
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    image: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
    video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
    reverse: false
  },
  {
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f",
    reverse: true
  }
];

const faqs = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  }
];

const Index = () => {
  return (
    <div className="bg-netflix-black text-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 netflix-gradient" />
        </div>
        
        <NavBar />
        
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <div className="flex flex-col md:flex-row gap-2 max-w-md md:max-w-2xl w-full">
            <input 
              type="email" 
              placeholder="Email address" 
              className="h-14 px-4 w-full text-black"
            />
            <Button className="h-14 bg-netflix-red hover:bg-red-700 font-bold px-8" asChild>
              <Link to="/register">
                Get Started <ChevronRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="border-t-8 border-gray-800">
        {features.map((feature, index) => (
          <div key={index} className="border-t-8 border-gray-800 py-12 md:py-20">
            <div className={`max-w-6xl mx-auto px-4 flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{feature.title}</h2>
                <p className="text-lg md:text-2xl">{feature.description}</p>
              </div>
              
              <div className="flex-1 relative">
                <img src={feature.image} alt={feature.title} className="relative z-10" />
                {feature.video && (
                  <div className="absolute z-0 top-[20%] left-[13%] right-[13%] bottom-[20%] max-w-[73%]">
                    <video autoPlay playsInline muted loop>
                      <source src={feature.video} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* FAQ Section */}
      <div className="border-t-8 border-gray-800 py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="mb-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg md:text-xl mb-6">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            
            <div className="flex flex-col md:flex-row gap-2 max-w-md md:max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Email address" 
                className="h-14 px-4 w-full text-black"
              />
              <Button className="h-14 bg-netflix-red hover:bg-red-700 font-bold px-8" asChild>
                <Link to="/register">
                  Get Started <ChevronRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t-8 border-gray-800 py-12 px-4 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <p className="mb-6">Questions? Call 1-844-505-2993</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <a href="#" className="block hover:underline">FAQ</a>
              <a href="#" className="block hover:underline">Investor Relations</a>
              <a href="#" className="block hover:underline">Privacy</a>
              <a href="#" className="block hover:underline">Speed Test</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Help Center</a>
              <a href="#" className="block hover:underline">Jobs</a>
              <a href="#" className="block hover:underline">Cookie Preferences</a>
              <a href="#" className="block hover:underline">Legal Notices</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Account</a>
              <a href="#" className="block hover:underline">Ways to Watch</a>
              <a href="#" className="block hover:underline">Corporate Information</a>
              <a href="#" className="block hover:underline">Only on Netflix</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Media Center</a>
              <a href="#" className="block hover:underline">Terms of Use</a>
              <a href="#" className="block hover:underline">Contact Us</a>
            </div>
          </div>
          
          <p className="text-sm">Netflix Clone - For Educational Purposes Only</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
