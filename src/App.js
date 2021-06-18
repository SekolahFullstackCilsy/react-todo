import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
