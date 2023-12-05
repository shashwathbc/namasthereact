import './App.css';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { HomePage } from './homepage/HomePage';

function App() {
  return (
    <div className="App">
        {/* HEADER */}
        <Header/>
        {/* MAIN BODY */}
        <HomePage/>
        {/* Footer */}
        {/* <Footer/> */}
    </div>
  );
}

export default App;
