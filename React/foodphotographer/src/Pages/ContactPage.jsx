import React from 'react'
import Nav from '../components/Nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
        <Nav></Nav><br/><br/> <br/><br/><br/>
        <div className='d-flex' style={{height:"110vh",width:"90%", marginLeft:"75px", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
          <div>
            <img src="./img10.jpeg" alt="" style={{height:"110vh", width:"190%"}}  />
          </div>
          <div style={{marginLeft:"30%", marginTop:"6%"}}>
            <h2> GET IN TOUCH</h2><br/>
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you. <br/><br/>

                Tel: 123-456-7890  |  Email: info@mysite.com
            </p><br/>

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name*</Form.Label>
        <Form.Control type="text"/>
        <Form.Label>Last Name*</Form.Label>
        <Form.Control type="text"/>
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email"/>
        <Form.Label>Subject*</Form.Label>
        <Form.Control type="text"/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button className="btn" style={{backgroundColor:"black",borderColor:"black",borderRadius:"0", marginLeft:"83%",height:"30px",width:"80px",padding:"1px"}}>Submit</Button>
    </Form><br/>
        <p>Stay Up-To-Date with New Posts</p>
        <Form>
        <Form.Label>Email*</Form.Label><br/>
        <input type="mail" name="mail" style={{width:"230px", height:"35px"}}/>
        <Button className="btn" style={{backgroundColor:"black", borderColor:"black",borderRadius:"0", marginLeft:"35px", height:"35px",width:"130px", padding:"1px"}}>Subscribe Now</Button>
        </Form>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}
export default ContactPage