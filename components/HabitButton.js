import { useState } from "react";

const HabitButton = () => {
  const [complete, setComplete] = useState(false);
  return (
    <button
      onClick={() => {
        setComplete(!complete);
      }}
    >
      {" "}
      {complete ? "X" : "0"}
    </button>
  );
};

export default HabitButton;
