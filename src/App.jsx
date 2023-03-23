import "./App.css";
import { _SUPABASE_KEY, _SUPABASE_URL } from "./utilities";
import WelcomeBanner from "./components/WelcomeBanner";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div>
      <WelcomeBanner />
      <ChatWindow />
    </div>
  );
}

export default App;
