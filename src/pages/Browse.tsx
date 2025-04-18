
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Info, Plus } from "lucide-react";
import NavBar from "@/components/NavBar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

// Mock content data
const mockContent = {
  featured: {
    id: "featured-1",
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl.",
    backgroundImage: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTmHxG9eIL8CIWyjoYfJFpanRlv5vXQkA4DHN-YznZmCR1nvaQ7gMqo8CKwox1-n0ETed5s3J9U7kb-zYhxUuUoXfwtC7h13z4rV.jpg?r=516",
    logoImage: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTAytd1vigKbOPjqKU6DxCz63oXMjpJTgETDGKrGXYJzjKq7cKLMPUTPiS9_o2c5onqy2-sghWQaYs-MOQOu_SXaFwHVJ0HP0W5A9FMwLLlC7wnTgRnucOWwHB_5VGDnL71J1I92R9rPDfnEeLLvR_z8JYJxp0Dnp4_LcTJw8jz69K2eMvYWMg.png?r=dab",
    type: "series",
    genre: "Sci-Fi & Fantasy",
    year: "2016",
    maturityRating: "TV-14"
  },
  trending: [
    {
      id: "trending-1",
      title: "The Witcher",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQTX1ckz8Hljnnj3hfsDRHCzwJJ3fqwfQQl9Ff1NJNSKgkJ5p_Xy3qC-MawmfnPkOOuZ2Bv8WELcVaZEVcnODlvEGv8W7FpLPJY.jpg?r=0d9",
      type: "series"
    },
    {
      id: "trending-2",
      title: "Money Heist",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSNtJvu8215Gl8GlVv_EEDFMgltlMgvQpVdIFqMsV2BsnOIHh43MaFHtpGU2H1jkJRzQ6HRqYhK2PTYuFJ1x93y-Vn7qqBR9GvQQ60hRov9c9cHvZ9-XLJLjlvs7XQ8dGJUfOw.jpg?r=301",
      type: "series"
    },
    {
      id: "trending-3",
      title: "The Queen's Gambit",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcEnQ7t8xxjoLS4nPnzKYl5ai0GoS_XFb_f4255TUu9584rm_CQBvsLXraOHycxEEXXp17CTCCmTJBd-nK0QfQx3eiJQxmDxP2WGLk4DZn70EQfWlVQAqSZDpVJJ-eeGGOIO.jpg?r=a3b",
      type: "limited-series"
    },
    {
      id: "trending-4",
      title: "Ozark",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABchJelRc8BmqqYQG5l4HILRoQJ-WpGOb-D5F3zEKBRUOnUJPPZIgmFIgU5CoFoeUnJgw-cIsrRm-ZjU2xLdvhHKz-AJ0RHxbQKk.jpg?r=01d",
      type: "series"
    },
    {
      id: "trending-5",
      title: "Dark",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZk5AnqL0UErjuo0g62KsFs_TxTiM6Y6SDJdRsD1lR_BE2UGYwIZKCYwZUOH5c9tH1dz_cvAoy7NPb2YJmAFRnAzAp5qoJeB4wQ.jpg?r=741",
      type: "series"
    }
  ],
  popular: [
    {
      id: "popular-1",
      title: "Breaking Bad",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXKJLvI-8OvYgWwkYHPXWHhpjWOzaLCbn0QKmqQdljv2pQZKAYA.jpg?r=01d",
      type: "series"
    },
    {
      id: "popular-2",
      title: "Stranger Things",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdl-Qja4QZcDm4zoGmZ4eP6J4mb-j94pqc2IJqn-Lsji_NZ3xx3Ht1boulP_sb3y3AHvGkpbMZWxIXPTakJYgU8wCjIhFFNgHPj9iVlDOGsHzxsgnYm_GHrLmzmu6B5TQQUy.jpg?r=ec7",
      type: "series"
    },
    {
      id: "popular-3",
      title: "The Crown",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRzU-wVrBijRiYkO0q3zCOmbgW0S5TA_SgGBJ_qP5gPtQnmZQQRUULDTYbcChECG-toR5lzjM_C-zOXnQQZ2XgWuJbMChxZjgmOB5hX1eJAzLJxmXnBFLYUpT8Zlu7DibDGC.jpg?r=e82",
      type: "series"
    },
    {
      id: "popular-4",
      title: "Mindhunter",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc8ybwzMvEkFI9aR1-DC8z5ygnwNi2BPHDYFTkdBLUQKAdRsrU8mKQiSWbmMUxfwXvTv_hOJK2ICdXirtfIzOBf3h_vGG39SNZbnucQBYa5l5pWUXpnuR_1J3w3tLiULh2JA.jpg?r=3d5",
      type: "series"
    },
    {
      id: "popular-5",
      title: "Black Mirror",
      image: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcvyrt6TFY9sweA2DBgXW1cGb4CBZvw2JEgUkELVDCHQQmlr5U1-V7vQvzdqq7p-Nd3nrOkV7_8BKPN8m1bZ7iQzPkjBVEDC5ArbVNsWCGBgGPz1_XBJ2vj5lKyEDH0HvCcI.jpg?r=776",
      type: "series"
    }
  ]
};

const ContentRow: React.FC<{ title: string, items: any[] }> = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item) => (
        <div key={item.id} className="content-card">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-[150px] md:h-[180px] object-cover"
          />
          <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-4 transition-opacity">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex items-center mt-2">
              <Button size="sm" variant="outline" className="mr-2">
                <Play className="h-4 w-4 mr-1" /> Play
              </Button>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SubscriptionPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
    <div className="bg-netflix-darkgray rounded-lg max-w-xl w-full p-6 relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-4">Your subscription has expired</h2>
      <p className="mb-6">Please renew your subscription to continue enjoying Netflix.</p>
      <div className="space-y-4">
        <Button 
          className="w-full bg-netflix-red hover:bg-red-700"
          onClick={() => window.location.href = '/subscription'}
        >
          Renew Subscription
        </Button>
        <Button 
          variant="outline"
          className="w-full"
          onClick={onClose}
        >
          Maybe Later
        </Button>
      </div>
    </div>
  </div>
);

const Browse: React.FC = () => {
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Check subscription status
    const isSubscribed = localStorage.getItem('subscribed');
    if (!isSubscribed) {
      // Show subscription popup after a delay
      const timer = setTimeout(() => {
        setShowSubscriptionPopup(true);
      }, 15000); // 15 seconds delay

      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NavBar />
      
      {/* Featured Content Hero */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={mockContent.featured.backgroundImage} 
            alt={mockContent.featured.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 md:p-16 max-w-2xl z-10">
          <img 
            src={mockContent.featured.logoImage} 
            alt={mockContent.featured.title} 
            className="w-[250px] md:w-[400px] mb-4"
          />
          <p className="text-shadow-md mb-4 text-sm md:text-lg">
            {mockContent.featured.description}
          </p>
          <div className="flex space-x-4">
            <Button className="bg-white hover:bg-gray-200 text-black">
              <Play className="h-5 w-5 mr-2" /> Play
            </Button>
            <Button variant="secondary">
              <Info className="h-5 w-5 mr-2" /> More Info
            </Button>
          </div>
        </div>
      </div>
      
      <div className="px-4 md:px-16 pb-16 -mt-10 relative z-20">
        <ContentRow title="Trending Now" items={mockContent.trending} />
        <ContentRow title="Popular on Netflix" items={mockContent.popular} />
      </div>
      
      {showSubscriptionPopup && (
        <SubscriptionPopup onClose={() => setShowSubscriptionPopup(false)} />
      )}
    </div>
  );
};

export default Browse;
