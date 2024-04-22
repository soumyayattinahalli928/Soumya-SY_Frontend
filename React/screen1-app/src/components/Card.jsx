import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample(props) {
  return (
  <div className="container" style={{marginLeft:"17%"}}>
    <div className="row ml-100">
      <div className="col-md-3">
        <div className="card" style={{height:"200px"}} >
          <img src="./sunglass.jpeg" class="card-img-top" style={{height:"200px"}} />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{height:"200px"}}>
          <img src="./camera.jpeg" class="card-img-top" style={{height:"200px"}}/>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" style={{height:"100px"}}>
          <img src="./glass.jpeg" class="card-img-top mh-30" style={{height:"200px"}}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BasicExample;