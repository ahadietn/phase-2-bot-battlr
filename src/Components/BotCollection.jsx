import React from "react";

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          handleClick={() => onEnlist(bot)} 
        />
      ))}
    </div>
  );
}

export default BotCollection;