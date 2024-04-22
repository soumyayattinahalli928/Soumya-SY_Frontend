import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import Card from './components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Button className='btn btn-primary'>Portfolio</Button><br/><br/>
        <h1 style={{textAlign:"center"}}>Check our Portfolio</h1><br/>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere architecto voluptas blanditiis similique hic officia necessitatibus quibusdam harum. Omnis excepturi ab numquam beatae ut commodi saepe recusandae vero exercitationem dignissimos!</p><br/>
        <Card/>
    </div>
  );
}

export default App;
