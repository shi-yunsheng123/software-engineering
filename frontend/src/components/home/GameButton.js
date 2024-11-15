import React from 'react';

const GameButtons = ({onStartClick, onDifficultyClick, difficulty}) => {
  return (
    <div className="game-buttons">
      <button className="btn btn-primary start-game-button" onClick={onStartClick}>开始游戏</button>
      <button className="btn btn-secondary difficulty-button" onClick={onDifficultyClick}>AI模型{difficulty}</button>
    </div>
  );
}

export default GameButtons;
