import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Header></Header>
            <Home></Home>
            <Footer />
          </>
        }>
        </Route>
        <Route path='/about' element={
          <>
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </>
        } ></Route>
        <Route path='/services'></Route>
        <Route path='/contact'></Route>
      </Routes>
    </Router>
  );
}

export default App;
