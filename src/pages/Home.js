import React from 'react'
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"


function Home() {
    
  return (
    
    <MainLayout>
      <div className='home-head'>
      <div className="homeheadline">THE FUTURE OF FUNDING IS HERE</div>
      {/* <p className="home-tagline">Discover the new and safest experience with BlockChain</p> */}
      <img className="home-image" src="https://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpg" alt="none"
        style={{width:"700px"}}
      />
      <div className="home1"><h2 style={{textAlign:"center", marginTop:"15px"}}>OUR VISION</h2><br/>
      <p style={{textAlign:"center",fontSize:"25px",margin:"10px"}}>We’re Changing the Way the World Thinks About Funding</p>
      <br></br>
      <br></br>
      <p style={{fontSize:"20px" ,lineHeight:"1.8",textAlign:"justify",margin:"5px 15px"}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p></div>
      <div className="home2"><h2 style={{textAlign:"center", marginTop:"15px"}}>CLICK IMAGE TO GET STARTED</h2>
      <br></br>
      <br></br>
      <Link to="/GetStarted">
      <img style={{margin:"60px 80px" ,width:"50%"}} src="ethbutton.jpeg" alt="none"/>
      </Link></div>
      <br></br>
       {/* <Link to='/GetStarted'>
       <button className="home-button" style={{
                    
                    width: '85px',
                    padding: '10px',
                    fontSize: '10px',
                    background: '#04AA6D',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                              
                  }} >
                    GetStarted</button>  
      </Link>  */}
    </div>
    </MainLayout>
    
  )
}

export default Home;