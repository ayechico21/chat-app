import React from "react";
import ChatScreen from "./ChatScreen";
import InputBox from "./InputBox";

function ChatWindow({ supabase }) {
  const [messages, setMessages] = React.useState(null);
  React.useEffect(() => {
    async function getAllMessages() {
      const { data, error } = await supabase.from("messages").select();
      setMessages(data);
    }
    getAllMessages();
  }, []);
  return (
    <div>
      <ChatScreen messages={messages} />
      <InputBox />
    </div>
  );
}

export default ChatWindow;
