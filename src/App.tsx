import ContextProvider from './context/Context'
import Header from './components/Header'
import Layout from './components/Layout'
import Menus from './components/Menus'
import CatList from './components/CatList'
import './App.scss'

function App() {
  return (
    <ContextProvider>
      <Header />
      <Layout>
        <Menus />
        <CatList />
      </Layout>
    </ContextProvider>
  )
}

export default App
