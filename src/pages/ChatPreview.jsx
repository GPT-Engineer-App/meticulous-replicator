import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

const ChatPreview = () => {
  const [messages, setMessages] = useState([
    { text: "To add the third icon (an arrow pointing upwards) when the input has text, we need to modify the GPTEngineer component. We'll add a new icon and make it visible only when there's text in the input.", sender: 'gpt' },
    { text: "Here are the concise SEARCH/REPLACE blocks, with only a few lines of context:", sender: 'gpt' },
    { text: "These changes will add the ArrowUpCircle icon from the lucide-react library and display it only when there's text in the input (i.e., when `isTyping` is true). The icon will appear alongside the existing Paperclip and Zap icons.", sender: 'gpt' },
    { text: "add this third icon, when the input has text see image", sender: 'user' },
    { text: "clicking on the ArrowUpCircle should send user to a new pag that should look exactly like this (see image):", sender: 'gpt' },
    { text: "Here's an example of how to add the icon:\n```jsx\nimport { ArrowUpCircle } from 'lucide-react';\n\n// Inside your component\n{isTyping && (\n  <ArrowUpCircle\n    className=\"w-5 h-5 text-gray-400 cursor-pointer\"\n    onClick={() => navigate('/chat-preview')}\n  />\n)}\n```", sender: 'gpt' },
    { text: "And here's how you might style the new page:\n```jsx\n<div className=\"h-screen bg-black text-white flex\">\n  <div className=\"w-1/2 p-4 overflow-y-auto\">\n    {/* Chat messages */}\n  </div>\n  <div className=\"w-1/2 p-4 border-l border-gray-700\">\n    {/* Preview iframe */}\n    <iframe src=\"/\" className=\"w-full h-full border-0\" />\n  </div>\n</div>\n```", sender: 'gpt' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isResizing, setIsResizing] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
    }
  };

  return (
    <div className="h-screen bg-black text-white">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={30}>
          <div className="h-full p-4">
            <div className="flex flex-col h-full">
              <div className="flex-grow overflow-y-auto mb-4">
                {messages.map((message, index) => (
                  <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-800'}`}>{message.text}</span>
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
  );
};

export default ChatPreview;
