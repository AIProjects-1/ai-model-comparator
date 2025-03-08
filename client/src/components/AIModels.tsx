import AIModel from './AIModel';
import { useState } from 'react';

const AIModels = () => {
  const [selectedModel1, setSelectedModel1] = useState('Model1');
  const [selectedModel2, setSelectedModel2] = useState('Model1');

  const models = ['Model1', 'Model2', 'Model3'];

  const handleModelChange = (model, modelIndex) => {
    if (modelIndex === 1) {
      setSelectedModel1(model);
    } else if (modelIndex === 2) {
      setSelectedModel2(model);
    }
  };

  return (
    <main className="flex flex-row pt-20 pb-24 px-4">
      <AIModel 
        models={models} 
        selectedModel={selectedModel1} 
        onModelChange={(model) => handleModelChange(model, 1)} 
      />
      <AIModel 
        models={models} 
        selectedModel={selectedModel2} 
        onModelChange={(model) => handleModelChange(model, 2)} 
      />
    </main>
  );
};

export default AIModels;
