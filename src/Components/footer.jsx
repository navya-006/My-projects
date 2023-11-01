import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
      <footer style={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        bottom: 0,
        width: '100%',
  transform: 'translate(-0%, 50%)',

       
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
    );
  }
  
  export default Footer;