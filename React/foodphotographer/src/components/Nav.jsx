import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { Link } from "react-router-dom";

function AlignmentExample() {
  return (
    <>
      <Nav  activeKey="/home" style={{height:"10%", width:"91%",marginLeft:"5%", position:"fixed", backgroundColor:"white"}}>
      <Nav.Item>
          <Nav.Link className="justify-content-start" style={{color:"black", fontSize:"30px", marginTop:"10px"}}>J. A L I S S A</Nav.Link>
        </Nav.Item>
        
      <Nav className="justify-content-end" style={{marginLeft:"25%", padding:"1.40%"}} activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" style={{color:"black"}}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" style={{color:"black"}}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/book" style={{color:"black"}}>Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog" style={{color:"black"}}>Blogs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/clientalbum" style={{color:"black"}}>Client Albums</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" style={{color:"black"}}>Contact</Nav.Link>
        </Nav.Item>
        </Nav> 
      </Nav>
    </>
  );
}

export default AlignmentExample;