import React from "react";
import ChatScreen from "./ChatScreen";
import InputBox from "./InputBox";
import { supabase } from "../utilities";
function ChatWindow() {
  const [messages, setMessages] = React.useState(null); // store chat messages

  /*Subscribe to real time API which triggers on db insert on table */
  const subscription = supabase
    .channel("any")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      (message) => {
        console.log("Change received!", message);
        const nextMessages = [...messages, message.new];
        setMessages((prev) => nextMessages); // update messages in react
      }
    )
    .subscribe();
  React.useEffect(() => {
    /*Fetch messages from supabase db */
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
