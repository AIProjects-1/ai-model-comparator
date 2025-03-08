import AIModel from './AIModel';
import { useState } from 'react';

const AIModels = ({selectedModel1,selectedModel2,response1,response2,onModelChange,loading1,loading2}) => {

  const models = ['Model1', 'Model2', 'Model3'];

  return (
    <main className="flex flex-row pt-20 pb-24 px-4">
      <AIModel 
        models={models} 
        selectedModel={selectedModel1} 
        response={response1}
        loading={loading1}
        onModelChange={(model) => onModelChange(model, 1)} 
      />
      <AIModel 
        models={models} 
        selectedModel={selectedModel2} 
        response={response2}
        loading={loading2}
        onModelChange={(model) => onModelChange(model, 2)} 
      />
    </main>
  );
};

export default AIModels;
