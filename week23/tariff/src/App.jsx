import { Tariff } from './components/Tariff/Tariff.jsx'
import tariffs from './tariffs.json'
import './App.css'

function App() {
  return (
    <div className="container">
      {tariffs.map((card) => (
        <Tariff
          key={card.price}
          price={card.price}
          speed={card.speed}
        />
      ))}
    </div>
  )
}

export default App
