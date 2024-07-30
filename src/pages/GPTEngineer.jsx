import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Table2, Wrench, Paperclip, Zap } from 'lucide-react';

const GPTEngineer = () => {
  const [message, setMessage] = useState('');

  const projects = [
    { name: 'confetti-fun-factory', creator: 'Viktor Eriksson', time: '5 minutes ago', gradient: 'from-purple-500 to-pink-500' },
    { name: 'vibey-confetti-factory', creator: 'Viktor Eriksson', time: '7 minutes ago', gradient: 'from-gray-700 to-gray-900' },
    { name: 'confetti-carnival-fun', creator: 'Viktor Eriksson', time: '7 minutes ago', gradient: 'from-purple-500 to-pink-500' },
    { name: 'confetti-festivity-burst', creator: 'Viktor Eriksson', time: '8 minutes ago', gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <Sparkles className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold">GPTEngineer</span>
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-4">Docs</a>
          <Button variant="ghost">Kristian Ruiz Kyvik</Button>
        </div>
      </header>

      <main>
        <h1 className="text-5xl font-bold mb-12">What do you want <span className="text-yellow-500">to</span> <span className="text-green-500">build</span>?</h1>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <ProjectCard icon={<Table2 />} text="A tool to upload and edit CSV files" color="text-green-500" />
          <ProjectCard icon={<Table2 />} text="A page showing top stories from Hacker News" color="text-orange-500" />
          <ProjectCard icon={<Wrench />} text="Create a boilerplate app I can easily modify" color="text-blue-500" />
          <ProjectCard icon={<Wrench />} text="A tool to help me manage my project tasks" color="text-pink-500" />
        </div>

        <div className="mb-12 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message GPT Engineer..."
            className="bg-gray-800 border-none text-white pl-4 pr-20 py-6 rounded-full"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <Paperclip className="w-5 h-5 text-gray-400 cursor-pointer" />
            <Zap className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="flex space-x-4 mb-8">
          <Button variant="ghost">My Projects</Button>
          <Button variant="ghost">Featured</Button>
          <Button variant="ghost">Latest</Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectPreview key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

const ProjectCard = ({ icon, text, color }) => (
  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
    <div className={`mb-2 ${color}`}>{icon}</div>
    <p className="text-sm">{text}</p>
  </div>
);

const ProjectPreview = ({ name, creator, time, gradient }) => (
  <div className="flex flex-col">
    <div className={`h-32 rounded-lg mb-2 bg-gradient-to-r ${gradient}`}></div>
    <h3 className="text-sm font-semibold">{name}</h3>
    <p className="text-xs text-gray-400">Created {time} by {creator}</p>
  </div>
);

export default GPTEngineer;
