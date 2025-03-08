import React, { useState } from 'react';
import { Send } from 'lucide-react';


//@ts-ignore
const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-2xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="message-input py-3 px-4 pr-12"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            className="send-button absolute right-2 bottom-2"
            disabled={!message.trim()}
          >
            <Send className="h-5 w-5 text-gray-600" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
