import React from "react";
import { supabase } from "../utilities";

/*Insert data into supabase db */
async function handleSend(data) {
  const message = { content: data };
  const { error } = await supabase.from("messages").insert(message);
}

function InputBox() {
  const [input, setInput] = React.useState(""); // track input message
  return (
    <div className="bg-red-300 p-4 flex justify-content space-x-5 ">
      <input
        className="flex items-center w-full rounded px-3 text-sm"
        type="text"
        value={input}
        placeholder="Type your message…"
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          /*when user hits enter key => send message */
          if (event.key === "Enter") {
            handleSend(input);
            setInput("");
          }
        }}
      ></input>
      <button
        className="rounded-lg px-6 py-2 text-white bg-gray-700 hover:bg-red-500"
        onClick={() => {
          handleSend(input);
          setInput("");
        }}
      >
        <span className="font-bold">Send</span>
      </button>
    </div>
  );
}

export default InputBox;
