import "./App.css";
import WelcomeBanner from "./components/WelcomeBanner";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="flex flex-col flex-grow  bg-white shadow-xl rounded-lg overflow-hidden">
      <WelcomeBanner />
      <ChatWindow />
    </div>
  );
}

export default App;
