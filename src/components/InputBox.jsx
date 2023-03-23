import React from "react";
import { supabase } from "../utilities";

async function handleSend(data) {
  const message = { content: data };
  const { error } = await supabase.from("messages").insert(message);
}

function InputBox() {
  const [input, setInput] = React.useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
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
