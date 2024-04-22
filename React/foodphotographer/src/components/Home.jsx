import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <header style={{height:"100vh",width:"90%", marginLeft:"70px"}}><br/><br/><br/> <br/>
      <div className = "head-text">
        <div className = "head-image">
        <img src = './img1.jpeg' alt = "Freedom Blog" style={{height:"100vh",width:"100%"}}/>
        </div>
      <div style={{height:"200px", width:"800px", marginLeft:"15%", marginTop:"-60%", textAlign:"center"}}>
      <h1 style={{ color:"whitesmoke", fontSize:"70px"}}> T H E  A R T  O F  F O O D</h1><br/>
        <h5 style={{color:"white"}}>P H O T O G R A P H Y</h5><br/>
        <Button className='btn' style={{borderColor:"white", color:"white"}}>View More</Button>
      </div>   
      </div>
    </header>
    
  );
}

export default FigureExample;