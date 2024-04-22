import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsEmp from './components/CardsEmp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container className="text-center ">
        <p>asjdkldfklasdfjjasdlkjfklsdjlkasjdfljlkasdjfkljasldjflkjasdfkljsldkfjlksajdflj</p>
      </Container>
      <Container className="d-flex">
      <CardsEmp imgurl={"https://images.unsplash.com/photo-1550792220-553fd02a239c?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODUxMTk2MjJ8fGVufDB8fHx8fA%3D%3D"} name={"John"} desig={"Sports person"}/>
      <CardsEmp imgurl={"https://images.unsplash.com/photo-1527814470081-7ea93dc97f02?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDc3ODk3NXx8ZW58MHx8fHx8"} name={"David"} desig={"Sports person"}/>
      <CardsEmp imgurl={"https://images.unsplash.com/photo-1550792220-553fd02a239c?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODUxMTk2MjJ8fGVufDB8fHx8fA%3D%3D"} name={"John"} desig={"Sports person"}/>
      <CardsEmp imgurl={"https://images.unsplash.com/photo-1550792220-553fd02a239c?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODUxMTk2MjJ8fGVufDB8fHx8fA%3D%3D"} name={"John"} desig={"Sports person"}/>

    </Container>
    </div>
  );
}

export default App;
