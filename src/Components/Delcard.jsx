import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Delcard({cl,data, store,setStore }) {

    const Delete = async(item)=>{
        const newValue = store.filter((i)=>i.id!=item.id)
        console.log(newValue,'new')
        setStore(newValue)
        localStorage.setItem("Data",JSON.stringify(newValue));
        await cl()
    }
  return (
    <Card sx={style}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography variant="body2">
         <h6>ARE SURE YOU WANT TO DELETE {data.PatientName}?</h6>
        </Typography>
      </CardContent>
      <CardActions>
        <Button  color='success' variant="outlined" onClick={cl}>CLOSE</Button>
        <Button onClick={()=>Delete(data)}  color='warning' variant="outlined" >YES,DELETE</Button>
      </CardActions>
    </Card>
  );
}