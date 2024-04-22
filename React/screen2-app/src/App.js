import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsEmp from './components/CardsEmp'
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar'
import Button from 'react-bootstrap/esm/Button';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container className="text-center ">
        <Button className='btn btn-primary'>TEAM</Button><br/><br/>
        <h1>Our HardWorking Team</h1><br/>
        <p>asjdkldfklasdfjjasdlkjfklsdjlkasjdfljlkasdjfkljasldjflkjasdfkljsldkfjlksajdfljzhyanamkandydkuhanddndhudljdndkdlnfe</p><br/>
      </Container>
      <Container className="d-flex justify-content-evenly">
      <CardsEmp  class="image" imgurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICSVq9-BAcWmscgA5pQyPPxdeJGu6p6w-0Q&s"} name={"Walter White"} desig={"Chief Executive Officer"}/>
      <CardsEmp  class="image"  imgurl={"./person2.jpeg"} name={"Sarah Jhonson"} desig={"Product Manager"}/>
      <CardsEmp  class="image"  imgurl={"./person3.jpeg"} name={"William Anderson"} desig={"CTO"}/>
      <CardsEmp  class="image"  imgurl={"./person4.jpeg"} name={"Amanda Jepson"} desig={"Accountant"}/>

    </Container>
    </div>
  );
}

export default App;

