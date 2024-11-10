import "./GameOver.css";

const GameOver = ({ retryGame, score }) => {
  return (
    <div>
      <h2>Fim do Jogo!</h2>
      <h2>
        Você conseguiu: <span>{score}</span> pontos
      </h2>

      <button onClick={retryGame}>Resetar o jogo</button>
    </div>
  );
};

export default GameOver;
