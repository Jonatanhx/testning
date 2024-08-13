import { useState } from "react";

//Props = integrationstester; Sammanväver 2 moduler
interface Props {
  onSubmit: (text: string) => void;
}
export default function TodoForm(props: Props) {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button type="submit">Save</button>
    </form>
  );
}
