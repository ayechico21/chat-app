import React from "react";

async function handleSend(supabase, data) {
  const message = { username: "anonymous", content: data };
  const { error } = await supabase.from("messages").insert(message);
}

function InputBox({ supabase }) {
  const [input, setInput] = React.useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={() => handleSend(supabase, input)}>send</button>
    </>
  );
}

export default InputBox;
