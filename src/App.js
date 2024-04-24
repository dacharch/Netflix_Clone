import './App.css';
import Feature from './components/Features/Feature';
import Home from './components/Home/Home';
import { Question } from './components/Questions/Question';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     
      <Home />
      <Feature />
      <Question/>
      <Footer/>
    </>
  );
}

export default App;
