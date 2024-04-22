import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Button from 'react-bootstrap/Button';
const Book = () => {
  return (
    <div>
        <Nav></Nav><br/><br/><br/><br/>
            <div style={{width:"80%", marginLeft:"10%"}}>
            <div className='d-flex' style={{height:"40vh",width:"89%", marginLeft:"6%", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
        
        <div style={{height:"40vh", width:"70%", marginTop:"10%"}}>
          <h1> BREAKFASTS</h1><br/>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. <br/><br/>
             </p>
          <h1>40 <sup>$</sup></h1>
          <Button>Buy Now</Button>
        </div>
        <div>
          <img src="./book1.jpeg" alt="" style={{height:"50vh", width:"150%"}} />
        </div>
      </div><br/><br/><br/><br/>
      <div className='d-flex' style={{height:"40vh",width:"89%", marginLeft:"6%", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
      
      <div style={{height:"40vh", width:"70%", marginTop:"10%"}}>
        <h1> BREAKFASTS</h1><br/>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. <br/><br/>
           </p>
        <h1>40 <sup>$</sup></h1>
        <Button>Buy Now</Button>
      </div>
      <div>
        <img src="./book2.jpeg" alt="" style={{height:"50vh", width:"150%"}} />
      </div>
    </div><br/><br/><br/><br/>
    <div className='d-flex' style={{height:"40vh",width:"89%", marginLeft:"6%", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
      
      <div style={{height:"40vh", width:"70%", marginTop:"10%"}}>
        <h1> BREAKFASTS</h1><br/>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. <br/><br/>
           </p>
        <h1>40 <sup>$</sup></h1>
        <Button>Buy Now</Button>
      </div>
      <div>
        <img src="./book3.jpeg" alt="" style={{height:"50vh", width:"150%"}} />
      </div>
    </div><br/>

            </div>
        <Footer></Footer>
    </div>
  )
}
export default Book