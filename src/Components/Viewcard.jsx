import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Scrollbars } from 'react-custom-scrollbars-2';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:490,
  bgcolor: 'background.paper',
  borderradius:'40px',
  borderRadius:'25px',
  boxShadow: 20,
       backgroundImage:
       'url("https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-minimalist-gradient-medical-background-gradienth5ad-image_77129.jpg")',
       backgroundSize: "cover", 
       backgroundRepeat: "no-repeat"
};

export default function MediaCard({send,close}) {
  console.log(send)
  return (
    <div>


   
    <Card sx={style}>
    <Scrollbars style={{ height: '470px' }}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        <table>
          <thead>
            <tbody>
            <tr>
            <th> Patient Name :</th>
            <th> {send.PatientName}</th>
            </tr>
            <hr/>

            <tr>
            <th>Age :</th>
            <th>{send.Age}</th>
            </tr>
            <hr/>

            <tr>
            <th>Phone No :</th>
            <th>{send.PhoneNo}</th>
            </tr>
            <hr/>
            

            <tr>
            <th>Address :</th>
            <th>{send.Address}</th>
            </tr>
            <hr/>

            <tr>
            <th>Room No :</th>
            <th>{send.RoomNo}</th>
            </tr>
            <hr/>

            <tr>
            <th>Consulted Doctor :</th>
            <th>{send.ConsultedDoctor}</th>
            </tr>
            <hr/>

            <tr>
            <th>Adimited Date :</th>
            <th>{send.AdmitedDate}</th>
            </tr>
            <hr/>

            <tr>
            <th>Discharged Date :</th>
            <th>{send.DischargeDate}</th>
            </tr>
            <hr/>

            <tr>
            <th>Total Amount :</th>
            <th>{send.TotalAmount}</th>
            </tr>
            </tbody>
            </thead>
            </table><br/>
            <div style={{marginLeft:'130px'}}>
    <button class='btn btn-outline-danger' size="small" onClick={close} >Close</button>
    </div>
        </Typography>        
     </CardContent>
     </Scrollbars>
    </Card>
   
   
    </div>
  );
}