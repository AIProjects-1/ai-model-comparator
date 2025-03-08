import {Grid, MessageCircle} from 'lucide-react';

const Header = () => {
return (
    
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
    
);
};

export default Header;
