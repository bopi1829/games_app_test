import './App.css'
import FilterableJeuxTable from './components/FilterableJeuxTable';
import JEUX from './data/Jeux'

function App() {
  return (
    <>
      <FilterableJeuxTable jeux={JEUX} />
    </>
  )
}

export default App
