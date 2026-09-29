import { useEffect, useState } from "react";

function InputBox() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (input.toLowerCase() === "java") {
      setText("Java is a popular programming language.");
    } 
    else if (input.toLowerCase() === "react") {
      setText("React is a JavaScript library for building UI.");
    } 
    else if (input.toLowerCase() === "python") {
      setText("Python is a high-level programming language.");
    } 
    else {
      setText("No information found.");
    }
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Java, React or Python"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>{text}</p>
    </div>
  );
}

export default InputBox;