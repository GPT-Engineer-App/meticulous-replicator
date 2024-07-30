import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpCircle, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const ChatPreview = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isResizing, setIsResizing] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2 text-pink-500" />
            <span className="font-semibold text-xl">lovable</span>
          </div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/gpt-engineer" className="hover:text-gray-300">GPT Engineer</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
          </ul>
        </div>
      </nav>
      <div className="flex-grow">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full p-4">
            <div className="flex flex-col h-full">
              <div className="flex-grow overflow-y-auto mb-4">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className="inline-block bg-gray-800 rounded-lg px-4 py-2">{message.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex">
                <Input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow mr-2 text-black"
                />
                <Button onClick={handleSendMessage}>
                  <ArrowUpCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </Panel>

        <PanelResizeHandle
          className="w-2 bg-gray-700 hover:bg-gray-600 transition-colors duration-200 cursor-col-resize relative"
          onDragging={(isDragging) => setIsResizing(isDragging)}
        >
          <div className={`absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center transition-opacity duration-200 ${isResizing ? 'opacity-100' : 'opacity-0'}`}>
            <ArrowLeft className="w-4 h-4 text-white" />
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </PanelResizeHandle>

        <Panel defaultSize={50} minSize={30}>
          <div className="h-full p-4">
            <iframe
              src="/"
              className="w-full h-full border-0"
              title="Website Preview"
            />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  </div>
);
};

export default ChatPreview;
