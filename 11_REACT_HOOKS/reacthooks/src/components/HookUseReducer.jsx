import { useReducer } from "react";

const HookUseReducer = () => {
  // 1- começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      {/* 1- useState */}
      <p>- HookUseState -</p>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>

      <hr />
    </div>
  );
};

export default HookUseReducer;
