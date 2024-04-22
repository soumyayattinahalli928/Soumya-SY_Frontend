import logo from './logo.svg';
import './App.css';
import './index.css'
import Nav from './components/Nav'
import Body from './components/Home'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Body/><br/><br/><br/><br/>
        <Footer/>
    </div>
  );
}

export default App;
