import { ArrowUpRight, Twitter, Github, Youtube, Linkedin, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-semibold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="#" className="hover:text-gray-300">Vision</a></li>
            <li><a href="#" className="hover:text-gray-300">News</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Lovable Logo */}
        <div className="w-64 h-64 mb-8">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            <path d="M50 88.9C25.5 72.3 11.1 57.8 6.8 45.5c-5.4-15.5 4.2-33.3 20.7-33.3 9.6 0 16.7 5.5 22.5 15.9 5.8-10.4 12.9-15.9 22.5-15.9 16.5 0 26.1 17.8 20.7 33.3-4.3 12.3-18.7 26.8-43.2 43.4z" 
                  fill="url(#heartGradient)" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold mb-6">The last piece of software.</h1>

        {/* Subheadline */}
        <p className="text-xl mb-12 max-w-2xl">
          We're building software that builds software. Our <a href="#" className="underline">vision</a> is to unlock 
          human creativity — by enabling anyone to create software.
        </p>

        {/* GPT Engineer Logo */}
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
          <span>GPTEngineer</span>
        </div>

        {/* Secondary Headline */}
        <h2 className="text-3xl font-semibold mb-8">It starts with an AI software engineer.</h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <FeatureCard
            title="For Everyone"
            description="Chat with AI to build and deploy web apps, with no technical knowledge needed."
          />
          <FeatureCard
            title="For Developers"
            description="Collaborate in chat and code with an AI engineer, to build at lightning speed."
          />
          <FeatureCard
            title="For Agencies"
            description="Partner with AI to streamline web app creation, iteration, and support."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 p-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 mr-2" />
                <span className="font-semibold text-xl">lovable</span>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="font-semibold mb-4 text-lg">GPT Engineer</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Overview</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Everyone</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Developers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Agencies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white flex items-center">Get early access <ArrowUpRight className="w-4 h-4 ml-1" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white flex items-center">Login <ArrowUpRight className="w-4 h-4 ml-1" /></a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Vision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-sm text-gray-400">
              © 2024 Lovable. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
    <h3 className="text-xl font-semibold mb-2 flex items-center">
      {title}
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Index;
