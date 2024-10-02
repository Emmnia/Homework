import { Tariff } from './components/Tariff/Tariff.jsx'
import tariffs from './tariffs.json'
import './App.css'
import { useState } from 'react'

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffClick = (card) => {
    setSelectedTariff(card.price);
  };

  return (
    <>
      <h1 className="title">Выберите тариф</h1>
      <div className="container">
        {tariffs.map((card) => (
          <Tariff
            key={card.price}
            price={card.price}
            speed={card.speed}
            card={card}
            onClick={handleTariffClick}
            isSelected={card.price === selectedTariff}
          />
        ))}
      </div>
      <button className="checkout" type="button" disabled={!selectedTariff}>Оформить</button>
    </>
  )
}

export default App

