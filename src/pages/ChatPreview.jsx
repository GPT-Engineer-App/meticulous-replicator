import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpCircle } from 'lucide-react';

const ChatPreview = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Chat Section */}
      <div className="w-1/2 p-4 border-r border-gray-700">
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
              className="flex-grow mr-2"
            />
            <Button onClick={handleSendMessage}>
              <ArrowUpCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Website Preview Section */}
      <div className="w-1/2 p-4">
        <iframe
          src="/"
          className="w-full h-full border-0"
          title="Website Preview"
        />
      </div>
    </div>
  );
};

export default ChatPreview;
