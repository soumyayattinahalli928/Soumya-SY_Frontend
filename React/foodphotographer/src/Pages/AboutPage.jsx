import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
   <>
       <div>
        <Nav></Nav><br/><br/><br/> <br/>
        <div className='d-flex' style={{height:"100vh",width:"89%", marginLeft:"6%", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
          <div>
            <img src="./img6.jpeg" alt="" style={{height:"100vh", width:"190%"}} />
          </div>
          <div style={{marginLeft:"30%", marginTop:"15%"}}>
            <h2> ABOUT JADE</h2><br/>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. <br/><br/>
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p><br/>

            <h3>Education:</h3><br/>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p><br/>

            <h3>Awards & Nominations:</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          </div>
          </div>
        </div>

        <Footer></Footer>
   </>

  )
}
export default AboutPage
