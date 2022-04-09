import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainMenu from './views/MainMenu'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      { /*<Header/>*/ }
      <Routes>
        <Route exact path='/' element={<MainMenu/>}/>
      </Routes>
      { /*<Footer/>*/ }
    </Router>
  );
}

export default App;
