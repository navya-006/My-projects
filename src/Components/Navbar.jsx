import React from 'react'
import { Link } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import HomeIcon from '@mui/icons-material/Home';
import DatasetIcon from '@mui/icons-material/Dataset';
import { Slider } from '@mui/material';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
  );

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
    const theme = useTheme();

  

 
  return (
     <div > 
          <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"  >
        <Toolbar style={{  background: "linear-gradient(90deg, green, yellow)"}}>
         <LocalHospitalOutlinedIcon 
         sx={{ mr: 2, color:'red',height:'40px',width:'40px',color:'red',backgroundColor:'white',borderRadius:'30px'}}>
        </LocalHospitalOutlinedIcon>
        
        <Typography >
        <Link to="/" style={{color:'black',fontSize:'20px',fontFamily:'initial'}}>
        HOME
        </Link>
        </Typography>

        <Typography>
        <Link to="/Alldata" style={{color:'black',marginLeft:'30px',fontSize:'20px',fontFamily:'initial'}}>
        DATA
        </Link>
        </Typography>

        <Typography style={{fontFamily:'initial',marginLeft:'69%',fontSize:'21px',color:'black'}}>
        PATIENT RECORD
        </Typography>
        </Toolbar>
      </AppBar>
        <Divider />
        
       
        <hr/> 
    </Box>
    </div>
  )
}


