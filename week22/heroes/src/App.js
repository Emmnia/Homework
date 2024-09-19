import './App.css';
import { Card } from './components/Card/Card';
import { heroes } from './heroes';

function App() {
  return (
    <div className='card-container'>
      {heroes.map((card) => (
        <Card
          key={card.url}
          name={card.name}
          universe={card.universe}
          alterego={card.alterego}
          occupation={card.occupation}
          friends={card.friends}
          superpowers={card.superpowers}
          url={card.url}
          info={card.info}
        />
      ))}
    </div>
  );
}

export default App;