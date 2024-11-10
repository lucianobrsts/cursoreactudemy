import "./GameOver.css";

const GameOver = ({ retryGame }) => {
  return (
    <div>
      <h2>GameOver</h2>
      <button onClick={retryGame}>Resetar o jogo</button>
    </div>
  );
};

export default GameOver;
