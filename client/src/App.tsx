import axios from 'axios';
import { useState } from 'react';
import AIModels from './components/AIModels';
import ChatBox from './components/ChatBox';
import Header from './components/Header';

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

  const handleSendMessage = async (message: string) => {
    // Set loading states for both models
    setLoading1(true);
    setLoading2(true);
  
    try {
      // Create an array to hold the promises for each selected model
      const requests = [];
  
      // Check if the first model is selected and add its request
      if (selectedModel1 === 'Model1') {
        requests.push(
          axios.post('http://localhost:3000/gemini', { prompt: message })
        );
      } else if (selectedModel1 === 'Model2') {
        requests.push(
          axios.post('http://localhost:3000/deepseek', { query: message })
        );
      }
  
      // Check if the second model is selected and add its request
      if (selectedModel2 === 'Model1') {
        requests.push(
          axios.post('http://localhost:3000/gemini', { prompt: message })
        );
      } else if (selectedModel2 === 'Model2') {
        requests.push(
          axios.post('http://localhost:3000/deepseek', { query: message })
        );
      }
  
      // Execute all requests in parallel
      const responses = await Promise.all(requests);
  
      // Extract responses based on the order of requests
      const data1 = responses[0]?.data?.response || 'No response from Model 1';
      const data2 = responses[1]?.data?.response || 'No response from Model 2';
  
      // Update state with the responses
      setResponse1(data1);
      setResponse2(data2);
    } catch (error) {
      console.error('Error fetching responses:', error);
      setResponse1('Error fetching response from Model 1.');
      setResponse2('Error fetching response from Model 2.');
    } finally {
      // Reset loading states
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