import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { _SUPABASE_KEY, _SUPABASE_URL } from "./utilities";
import WelcomeBanner from "./components/WelcomeBanner";
import ChatWindow from "./components/ChatWindow";

function App() {
  const supabase = createClient(_SUPABASE_URL, _SUPABASE_KEY);
  return (
    <div>
      <WelcomeBanner />
      <ChatWindow supabase={supabase} />
    </div>
  );
}

export default App;
