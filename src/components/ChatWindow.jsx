import React from "react";
import ChatScreen from "./ChatScreen";
import InputBox from "./InputBox";
import { supabase } from "../utilities";
function ChatWindow() {
  const [messages, setMessages] = React.useState(null);
  const subscription = supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      (message) => {
        console.log("Change received!", message);
        const nextMessages = [...messages, message.new];
        setMessages((prev) => nextMessages);
      }
    )
    .subscribe();
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
