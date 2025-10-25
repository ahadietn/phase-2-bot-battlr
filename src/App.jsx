import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BotCollection from './Components/BotCollection'
import YourBotArmy from './Components/YourBotArmy'
import './App.css'

function App() {
   const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter(b => b.id !== id));
      setBots(bots.filter(b => b.id !== id));
    });
  };


  return (
    <>
     className="App"
      <h1>Bot Battlr</h1>
      <YourBotArmy 
        army={army} 
        onRelease={handleRelease} 
        onDelete={handleDelete} 
      />
      <BotCollection 
        bots={bots} 
        onEnlist={handleEnlist} 
      />
    </>
  )
}

export default App
