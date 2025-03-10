import axios from 'axios';
import { useState } from 'react';
import AIModels from './components/AIModels';
import ChatBox from './components/ChatBox';
import Header from './components/Header';

function App() {
  const [selectedModel1, setSelectedModel1] = useState('Gemini');
  const [selectedModel2, setSelectedModel2] = useState('DeepSeek');
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


  
  const handleSendMessage = async (message: string) => {
    setLoading1(true);
    setLoading2(true);
  
    const baseUrl = "https://ai-model-comparator.onrender.com/";
    const modelEndpoints = {
      Gemini: `${baseUrl}gemini`,
      DeepSeek: `${baseUrl}deepseek`,
    };
  
    const models = [
      { model: selectedModel1, setter: setResponse1, setLoading: setLoading1 },
      { model: selectedModel2, setter: setResponse2, setLoading: setLoading2 },
    ];
  
    try {
      const requests = models
        .filter(({ model }) => model) // Ensure selected models exist
        .map(({ model, setter, setLoading }) =>
          axios
            .post(modelEndpoints[model], model === "Gemini" ? { prompt: message } : { query: message })
            .then((res) => setter(res.data.response))
            .catch((error) => {console.error(`Error fetching response from ${model}:`, error);
            setter(`Error fetching response from ${model}.`);
          })
            .finally(() => setLoading(false)) // Stop loading for each request separately
        );
  
      await Promise.allSettled(requests); // Execute requests in parallel
    } catch (error) {
      console.error("Error processing requests:", error);
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