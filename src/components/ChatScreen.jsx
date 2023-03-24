import React from "react";
function ChatScreen({ messages }) {
  return (
    <div className="flex flex-col flex-grow p-4 overflow-y-scroll h-80">
      {messages &&
        messages.map(({ id, content }) => {
          return (
            <div
              className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"
              key={id}
            >
              <div className="bg-gray-700 text-white p-3 rounded-l-lg rounded-br-lg">
                {content}
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-300"></div>
            </div>
          );
        })}
    </div>
  );
}

export default ChatScreen;
