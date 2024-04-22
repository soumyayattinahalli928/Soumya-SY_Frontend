import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function Blogs() {
  return (
  <>
    <Nav></Nav>
    <div>
        <Nav></Nav><br/><br/> <br/><br/><br/>
        <h1 style={{textAlign:"center"}}>MY BLOG</h1><br/><br/>
        <div className='d-flex' style={{height:"40vh",width:"90%", marginLeft:"75px", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
          <div>
            <img src="./blog1.jpeg" alt="" style={{height:"40vh", width:"350%"}}  />
          </div>
          <div style={{marginLeft:"40%", marginTop:"6%"}}>
            <h2> THE HOLIDAY SPECIAL</h2><br/>
            <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            </p><br/>
          </div>
        </div><br/>
        <div className='d-flex' style={{height:"40vh",width:"90%", marginLeft:"75px", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
          <div>
            <img src="./blog2.jpeg" alt="" style={{height:"40vh", width:"350%"}}  />
          </div>
          <div style={{marginLeft:"40%", marginTop:"6%"}}>
            <h2> SIMPLE BACKDROPS FOR FOOD SHOTS</h2><br/>
            <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            </p><br/>
          </div>
        </div><br/>
        <div className='d-flex' style={{height:"40vh",width:"90%", marginLeft:"75px", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
          <div>
            <img src="./blog3.jpeg" alt="" style={{height:"40vh", width:"350%"}}  />
          </div>
          <div style={{marginLeft:"40%", marginTop:"6%"}}>
            <h2> BEFORE THE DRIP</h2><br/>
            <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            </p><br/>
          </div>
        </div><br/>
        <div className='d-flex' style={{height:"40vh",width:"90%", marginLeft:"75px", backgroundColor:"whitesmoke"}}><br/><br/><br/> <br/>
          <div>
            <img src="./blog4.jpeg" alt="" style={{height:"40vh", width:"350%"}}  />
          </div>
          <div style={{marginLeft:"40%", marginTop:"6%"}}>
            <h2> STYLING YOUR SHOTS</h2><br/>
            <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
            </p><br/>
          </div>
        </div><br/>
        
    </div>
    <Footer></Footer>
  </>
  );
}

export default Blogs;


