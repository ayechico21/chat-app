import "./App.css";
import WelcomeBanner from "./components/WelcomeBanner";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className=" bg-white shadow-xl rounded-lg">
      <WelcomeBanner />
      <ChatWindow />
    </div>
  );
}

export default App;

// overflow-hidden
