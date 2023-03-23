import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { _SUPABASE_KEY, _SUPABASE_URL } from "./utilities";

function App() {
  const supabase = createClient(_SUPABASE_URL, _SUPABASE_KEY);
  return <div className="App"></div>;
}

export default App;
