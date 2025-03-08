
import Header from './components/Header'
import ChatBox from './components/ChatBox';
import AIModels from './components/AIModels';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Header/>
      <AIModels/>
      <ChatBox onSendMessage={()=>{}}/>
    </div>
  );
}

export default App;