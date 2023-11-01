import React,{useEffect,useState} from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import{Button} from '@mui/material';
import{Link,Navigate,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Navbar from './Navbar';
import Footer from './footer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:450,
  borderRadius:'25px',
  boxShadow: 20,
       backgroundImage:
       'url("https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-blue-hospital-medical-western-medicine-poster-background-backgroundmedical-backgrounddoctor-backgroundhospital-image_63770.jpg")',
       backgroundSize: "cover", 
} 


export default function From() {
const params = useParams()
let nav= useNavigate();
console.log(params.id,'params')
const[update,setUpdate]=useState()
const [single,setSingle]=useState()
const[index,setIndex]=useState()


  let userId = params.id;

  useEffect(()=>{

    const newOne=JSON.parse(localStorage.getItem("Data"))
    setUpdate(newOne);
    // const Onevalue=newOne.filter((i)=>i.id==userId)
    let select=newOne.find((obj)=>obj.id==userId)
    console.log(select,'select')
    setSingle(select);
    // console.log(Onevalue,"single")
     
     const userIndex=newOne.findIndex((e)=>e.id==userId);
     setIndex(userIndex)
     console.log(userIndex)
  },[])
  console.log(single)
  const Up=(e)=>{
    setSingle({...single,[e.target.name]:e.target.value});
  }
const Updated=async()=>{
  const set= [...update];
  set.splice(index,1,single);
  localStorage.setItem("Data",JSON.stringify(set))
  await nav("/Alldata");}
  console.log(update,"update")
  

  const trigger = useScrollTrigger();
  
    return (
      <div class = "image"
      style = {{
         height: "760px",
         backgroundImage:
         'url("https://wallpapers.com/images/hd/medical-background-cjge7e89adg6ub8x.jpg")',
         backgroundSize: "cover", 
         backgroundRepeat: "no-repeat",
      }}>



         <div style={{transform:'translate(0%,20%)',height:'550px'}}>  
<Slide in={!trigger }>

          <Typography variant="body2" >
          <TextField id="outlined-light" color="warning" value={single?.PatientName} name='PatientName' label="Patient Name" variant="outlined" onChange={Up}/><br /><br />
          <TextField id="outlined-basic" color="warning"value={single?.Address} name='Address' label="Address" variant="outlined" onChange={Up}/><br /><br />
          <TextField id="outlined-basic" color="warning"value={single?.PhoneNo} name='PhoneNo' label="Phone No" variant="outlined" onChange={Up} /><br /><br />
          <TextField id="outlined-basic" color="warning"value={single?.RoomNo} name='RoomNo' label="Room No" variant="outlined" onChange={Up} /><br /><br />
          <TextField style={{width:"210px"}} id="outlined-basic" color="warning"value={single?.DischargeDate} type='date' name='DischargeDate' label="Discharge Date" variant="outlined" onChange={Up}/><br /><br />
          <TextField id="outlined-basic" color="warning"value={single?.TotalAmount} name='TotalAmount' label="TotalAmount" variant="outlined" onChange={Up} /><br /><br />
          <button class="btn btn-success " onClick={Updated}>UPDATE</button> 
         <Link to='/Alldata'><button class='btn btn-danger m-1'>Chancel</button></Link> 
          </Typography>
        </Slide>

        </div>
<Navbar/>
<Footer/>
      </div>
    )
  }

  // const fruits=['apple'.'banana','orange']
  // fruits.splice(1,1,'mango') Replace
  // fruits.splice(1,1) Remove
  // console.log(fruits)
  // splice(index,removevalue,updatevalue)