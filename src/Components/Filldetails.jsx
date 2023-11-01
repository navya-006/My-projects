import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Footer from './footer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      Patient Record Maintenance
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Filldetails() {
  const initialValue = JSON.parse(localStorage.getItem('Data')) || [];

  const [phoneError, setPhoneError] = useState('');

  const [value, setValue] = useState(initialValue);

  const [data, setData] = useState([]);
  const [table, setTable] = useState({
    PatientName: '',
    Age: '',
    PhoneNo: '',
    Address: '',
    RoomNo: '',
    ConsultedDoctor: '',
    AdmitedDate: '',
    DischargeDate: '',
    TotalAmount: '',
  });

  const Name = (e) => {
    setTable({ ...table, [e.target.name]: e.target.value });
  };

  const Insert = () => {
    // Check if any of the required fields are empty
    if (
      !table.PatientName ||
      !table.Age ||
      !table.PhoneNo ||
      !table.Address ||
      !table.RoomNo ||
      !table.ConsultedDoctor ||
      !table.AdmitedDate ||
      !table.DischargeDate ||
      !table.TotalAmount
    ) {
      alert('Please fill all required fields before submitting.');
      return;
    }

    if (phoneError) {
      alert('Phone number must be unique'); 
      return;
    }

    const newId = value.length === 0 ? 1 : value[value.length - 1].id + 1;
    let user = {
      id: newId,
      ...table,
    };
    const newvalue = [...value, user];
    setData(newvalue);
    localStorage.setItem('Data', JSON.stringify(newvalue));
  };

// Phone number Should not be same

  const handlePhoneChange = (e) => {
    const newPhoneNumber = e.target.value;
    const isDuplicate = value.some((contact) => contact.PhoneNo === newPhoneNumber);
    if (isDuplicate) {
      const duplicateContact = value.find((contact) => contact.PhoneNo === newPhoneNumber);
      setPhoneError(`Phone number ${newPhoneNumber} already exists for ${duplicateContact.PatientName}`);
    } else if (!/^\d{10}$/.test(newPhoneNumber)) {
      setPhoneError('Invalid phone number. Must be 10 digits.');
    }else {
      setPhoneError('');
    }
    setTable({ ...table, [e.target.name]: newPhoneNumber });
  }

  const trigger = useScrollTrigger();
  return (
    <div
      class="image"
      style={{
        height: '100%',
        backgroundImage:
          'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v870-tang-36_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d79f64b7b61002995177b5a8d81b522e")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <Slide in={!trigger }>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AddCircleIcon
            sx={{
              color: 'red',
              height: '45px',
              width: '45px',
              backgroundColor: 'white',
              borderRadius: '70px',
            }}
          />
          <Box component="form" sx={{ mt: 3 }}>
          
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  label="Patient Name"
                  name="PatientName"
                  color='success'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  label="Age"
                  name="Age"
                  color='success'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handlePhoneChange}
                  required
                  label="Phone No"
                  name="PhoneNo"
                  color='success'
                  helperText={phoneError}  error={!!phoneError}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  label="Address"
                  name="Address"
                  color='success'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  label="Room No"
                  name="RoomNo"
                  color='success'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  label="Consulted Doctor"
                  name="ConsultedDoctor"
                  color='success'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  type="date"
                  label="Admitted Date"
                  name="AdmitedDate"
                  color='success'
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  type="date"
                  label="Discharge Date"
                  name="DischargeDate"
                  fullWidth
                  color='success'
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={(e) => Name(e)}
                  required
                  fullWidth
                  label="Total Amount"
                  name="TotalAmount"
                  color='success'
              

                />
              </Grid>
            </Grid>
            <br />
            <Grid class="d-grid gap-2">
              <Link to="/Alldata">
                <button
                  onClick={Insert}
                  type="submit"
                  class="btn btn-info col-12 mx-auto"
                >
                  SUBMIT
                </button>
              </Link>
              <Link to="/">
                <button
                  type="chancel"
                  class="btn btn-danger col-12 mx-auto"
                >
                  CANCEL
                </button>
                </Link>

                <Link to="/Alldata">
                <button
                  type="chancel"
                  class="btn btn-success col-12 mx-auto"
                >
                  VIEW
                </button>
              </Link>
            </Grid>

          </Box>
        </Box>
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Slide>
      <br />
      <Footer />
    </div>
  );
}
