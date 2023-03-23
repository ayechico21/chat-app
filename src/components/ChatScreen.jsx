import React from "react";

function ChatScreen({ messages }) {
  return (
    <>
      {messages && messages.map(({ id, content }) => <p key={id}>{content}</p>)}
      {!messages && <div>No Messages</div>}
    </>
  );
}

export default ChatScreen;
