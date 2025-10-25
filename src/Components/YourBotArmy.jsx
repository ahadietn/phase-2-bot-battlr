import React from "react";

function YourBotArmy({ army, onRelease, onDelete }) {
  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          handleClick={() => onRelease(bot)} 
          handleDelete={onDelete} 
        />
      ))}
    </div>
  );
}


export default YourBotArmy;