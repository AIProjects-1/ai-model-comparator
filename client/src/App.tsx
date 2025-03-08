
import Header from './components/Header'
import ChatBox from './components/ChatBox';
import AIModels from './components/AIModels';

import { useState } from 'react';

function App() {
  const [selectedModel1, setSelectedModel1] = useState('Model1');
  const [selectedModel2, setSelectedModel2] = useState('Model1');
  const [response1, setResponse1] = useState('');
  const [response2, setResponse2] = useState('');
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleModelChange = (model, modelIndex) => {
    if (modelIndex === 1) {
      setSelectedModel1(model);
    } else {
      setSelectedModel2(model);
    }
  };

  const handleSendMessage = async (message) => {
    setLoading1(true);
    setLoading2(true);

    try {
      const responseA = await fetch(`https://api.example.com/${selectedModel1}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const responseB = await fetch(`https://api.example.com/${selectedModel2}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data1 = await responseA.json();
      const data2 = await responseB.json();

      setResponse1(data1.response);
      setResponse2(data2.response);
    } catch (error) {
      console.error("Error fetching responses:", error);
      setResponse1("Error fetching response from Model 1.");
      setResponse2("Error fetching response from Model 2.");
    } finally {
      setLoading1(false);
      setLoading2(false);
    }
  };

  
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Header/>
      <AIModels
      selectedModel1={selectedModel1}
      selectedModel2={selectedModel2}
      response1={response1}
      response2={response2}
      loading1={loading1}
      loading2={loading2}
      onModelChange={handleModelChange}
      />
      <ChatBox onSendMessage={handleSendMessage}/>
    </div>
  );
}

export default App;