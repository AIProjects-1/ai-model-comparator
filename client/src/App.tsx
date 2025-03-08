import { Grid, MessageCircle, Send } from 'lucide-react';
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission here
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle className="h-6 w-6 text-gray-500" />
            <h1 className="ml-3 text-lg font-medium">Chat Comparotor</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Grid className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 pb-24 px-4">
        <div className="chat-container min-h-[calc(100vh-12rem)]">
          <div className="p-6 flex items-center justify-center h-full text-gray-500">
            How can I help you today?
          </div>
        </div>
      </main>

      {/* Input Area */}
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
    </div>
  );
}

export default App;