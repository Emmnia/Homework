import './App.css';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { words } from './words';
import { Footer } from './components/Footer/Footer';

function App() {
  const word = words.sort(() => Math.random() - Math.random())
    .find(() => true);
  return (
    <div className="content">
      <Header />
      <main className="main">
        <div className='container'>
          {word &&
            <Card
              key={word.id}
              id={word.id}
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tags={word.tags}
              boolean={word.boolean}
            />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
