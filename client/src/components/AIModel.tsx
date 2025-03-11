import Loader from "./Loader"; 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
//@ts-ignore
const AIModel = ({ models, selectedModel, onModelChange, response, loading }) => {
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
    <div className="p-6 flex flex-col items-center justify-center h-full text-gray-500">
            
          {loading ? (
            <Loader/>
          ) : response ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{response}</ReactMarkdown>
          ) : (
            <div>How can i help you today?</div>
          )}
          </div>
    </div>
    
  );
};

export default AIModel;