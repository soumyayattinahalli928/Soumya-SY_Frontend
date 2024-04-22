import React from 'react'
import Nav from '../components/Nav'
import Button from 'react-bootstrap/Figure';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
        <>
            <Nav></Nav><br/><br/> <br/><br/><br/>
            <h1 style={{textAlign:"center"}}>PORTFOLIO</h1><br/><br/>
            <div style={{height:"80vh",width:"90%", marginLeft:"6%", display:"flex", justifyContent:"space-evenly"}}>
                <div>
                    <img src="./img7.jpeg" alt="" style={{height:"80vh", width:"97%"}}/>
                    <div style={{textAlign:"center", marginTop:"-650px"}}>
                    <h2 style={{color:"white"}}>EDITORIAL</h2>
                    <Button className='btn' style={{borderColor:"white", color:"white"}}>View</Button>
                    </div>
                </div>
                <div>
                    <img src="./img8.jpeg" alt="" style={{height:"80vh", width:"97%"}}/>
                    <div style={{textAlign:"center", marginTop:"-650px"}}>
                    <h2 style={{color:"white"}}>FOOD & SERVE</h2>
                    <Button className='btn' style={{borderColor:"white", color:"white"}}>View</Button>
                    </div>
                </div>
                <div>
                    <img src="./img9.jpeg" alt="" style={{height:"80vh", width:"97%"}}/>
                    <div style={{textAlign:"center", marginTop:"-650px"}}>
                    <h2 style={{color:"white"}}>BAKED GOODS</h2>
                    <Button className='btn' style={{borderColor:"white", color:"white"}}>View</Button>
                    </div>
                </div>
            </div><br/>

            <Footer></Footer>

        </>

  )
}
export default PortfolioPage
