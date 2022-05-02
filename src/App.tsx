import './App.scss'
import catsData from './data/catdata.json'

function App() {
  const cats = catsData.cats

  return (
    <header>
      <h1>CATS INCORPURRATE</h1>
      <nav>
        <label>Sorting</label>
        <ul>
          <li>None</li>
          <li>Much cute</li>
          <li>Not cute</li>
        </ul>
      </nav>
      <div className="cat-grid">
        <ul className="cat-list">
          {cats.map((cat) => (
            <li key={cat.name}>{cat.name}</li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default App
