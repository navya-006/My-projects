import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Navbar from './Navbar';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:400,
  bgcolor: 'background.paper',
  boxShadow: 20,
  borderRadius:'20px'
};

export default function Home() {
  const trigger = useScrollTrigger();

  return (
    
    <div  class = "image"
    style = {{
       height: "595px",
       backgroundImage:
       'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm373batch15-217-01.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d8bbc66e02e81095950de55fcc9347f5")',
       backgroundSize: "cover", 
       backgroundRepeat: "no-repeat",
    }}
   >
    
    <Navbar/>     
    <Slide in={!trigger }>
<Card style={{height:'400px',width:'700px',marginTop:'10%',marginLeft:'22%',borderRadius:'3%'}}>
      <CardMedia
        sx={{height:"400px"}}
        image="https://images01.nicepagecdn.com/page/62/60/html-template-preview-62603.jpg"
        title="Click On Get Started"
      >
        <div style={{transform:'translate(-39%, 750%'}}>
    <Link to='/Filldetails'><button type="button" class="btn btn-outline-light btn-rounded " >GET STARTED</button></Link>
       </div>
    </CardMedia>
    </Card> 
    </Slide>
    <div>
    <footer style={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        bottom: 0,
        width: '100%',
        transform: 'translate(-0%, 10%)',

       
      }}>
        &copy; {new Date().getFullYear()} Patients Record Maintenace - All Rights Reserved
        <div>
        <AddIcCallIcon style={{color:'skyblue'}}></AddIcCallIcon> +91 9865789867<br/>
        <EmailIcon style={{color:'skyblue'}}></EmailIcon> patientrecord@gmail.com<br/>
        <TwitterIcon style={{color:'skyblue'}}></TwitterIcon>
        <FacebookIcon style={{color:' #3385ff'}}></FacebookIcon>
        <InstagramIcon style={{color:' #ff33cc'}}></InstagramIcon>
        </div>
        <hr/>
        <br/>
        <h5 style={{color:'skyblue'}}>About Our Website</h5>
        Medical records management is organizing and handling patients’ health information in a way convenient for medical professionals to access and carry out healthcare workflows. Patient records are created when people walk into a clinic or healthcare center for the first time. Health records management involves rules, regulations, procedures, and protocols to manage health records throughout their existence. This involves updating, modifying, communicating with other providers, and ensuring privacy and integrity. Managing health records is important since the data it contains leads to treatment decisions by doctors. 
      </footer>
      </div>
    
    </div>
  
  )
}
