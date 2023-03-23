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
    <>
      <input
        type="text"
        value={input}
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
        onClick={() => {
          handleSend(input);
          setInput("");
        }}
      >
        send
      </button>
    </>
  );
}

export default InputBox;
