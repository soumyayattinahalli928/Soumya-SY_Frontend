import React from 'react'
import Nav from '../components/Nav'

const ClientAlbum = () => {
  return (
    <div>
         <Nav></Nav><br/><br/> <br/><br/><br/>
            <h1 style={{textAlign:"center"}}>CLIENT ALBUMS</h1><br/><br/>
            <div style={{height:"80vh",width:"90%", marginLeft:"75px", display:"flex", justifyContent:"space-evenly"}}>
                <div>
                    <img src="./img7.jpeg" alt="" style={{height:"80vh", width:"97%"}}/>
                    <div style={{textAlign:"center", marginTop:"-400px"}}>
                    <h1 style={{color:"white"}}>GREEN EDITORIAL</h1>
                    <p  style={{color:"white"}}>Client: Herbal Magazine</p>
                    </div>
                </div>
                <div>
                    <img src="./img8.jpeg" alt="" style={{height:"80vh", width:"97%"}}/>
                    <div style={{textAlign:"center", marginTop:"-400px"}}>
                    <h1 style={{color:"white"}}>BREAD BAKING <br/> RECEPIES</h1>
                    <p  style={{color:"white"}}>Client: The Baker Blog</p>
                    </div>
                </div>
                <div>
                    <img src="./img9.jpeg" alt="" style={{height:"80vh", width:"97%"}}/>
                    <div style={{textAlign:"center", marginTop:"-400px"}}>
                    <h1 style={{color:"white"}}>FRENCH <br/> COOKBOOK</h1>
                    <p  style={{color:"white"}}>Client: La Peche</p>
                    </div>
                </div>
            </div><br/>
    </div>
  )
}
export default ClientAlbum