import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>
        {bot.health}{bot.damage}{bot.armor}
      </p>
      {handleDelete && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(bot.id);
          }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
