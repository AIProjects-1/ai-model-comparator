import { useState } from 'react';

//@ts-ignore
const AIModel = ({ models, selectedModel, onModelChange }) => {
  return (

    <div className="flex-1 chat-container min-h-[calc(100vh-12rem)]">
        <div className="p-4">
      <select
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {models.map((model, index) => (
          <option key={index} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
          <div className="p-6 flex items-center justify-center h-full text-gray-500">
            How can I help you today?
          </div>
    </div>
    
  );
};

export default AIModel;