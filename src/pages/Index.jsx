import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span className="font-semibold">lovable</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">GPT Engineer</a></li>
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
          <div className="w-full h-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full"></div>
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
      <footer className="mt-16 p-8">
        <div className="flex justify-between items-start max-w-4xl mx-auto">
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2" />
            <span className="font-semibold">lovable</span>
          </div>
          <div className="flex space-x-16">
            <div>
              <h3 className="font-semibold mb-2">GPT Engineer</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Overview</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">For Everyone</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Vision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg">
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
