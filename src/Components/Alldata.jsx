import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Delcard from './Delcard';
import Viewcard from './Viewcard';
import Navbar from './Navbar';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Footer from './footer';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const label = { inputProps: { 'aria-label': 'Switch demo' } };




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Alldata() {
  const [data, setData] = useState([]);
  const [store, setStore] = useState([]);

  const [searchDate, setSearchDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // New state for sorting order
  const [sortOrder, setSortOrder] = useState('asc'); 

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('Data'));
    setStore(item);
  }, [data]);

  console.log(store, 'store');
  const Delete = () => {
    setData([]);
  }

  // search
  const handleSearch = () => {
    if (!searchDate) {
      setFilteredData([]);
    } else {
      const filteredResults = store.filter(item => item.AdmitedDate === searchDate);
      setFilteredData(filteredResults);
    }
  };
  const clearSearch = () => {
    setSearchDate('');
    setFilteredData([]);
  };


  const [open, setOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedUser(item);
  }

  const handleClose = () => setOpen(false);
  const [close, setClose] = useState(false);

  const handledelete = (item) => {
    setClose(true);
    setSelectedUser(item);
  }

  const handleClose1 = () => setClose(false);

// Data sorting
  const sortData = () => {
    const sortedData = [...store];
    
    if (sortOrder === 'asc') {
      sortedData.sort((a, b) => new Date(a.AdmitedDate) - new Date(b.AdmitedDate));
      setSortOrder('desc');
    } else {
      sortedData.sort((a, b) => new Date(b.AdmitedDate) - new Date(a.AdmitedDate));
      setSortOrder('asc');
    }
    setFilteredData([]); 
    setStore(sortedData);
  };
  
  const trigger = useScrollTrigger();

  return (
    <div className="image" style={{
      height: '762px',
      backgroundImage: 'url("https://cdn.sanity.io/images/0vv8moc6/biopharn/64e01bf1f7dbd9099e249e9c3247fdbb9a46b4b1-1280x720.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Navbar />
      <div style={{marginTop:'80px'}}>
            <input
              type="text"
              placeholder="Search By Admited Date"
              value={searchDate}
              style={{borderBlockColor:'blue',borderRadius:'10px',height:'37px',width:'35%'}}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <button class='btn btn-info m-2' onClick={handleSearch}>Search</button>
            <button class='btn btn-danger m-2 ' onClick={clearSearch}>Clear</button>
            
            <FormControlLabel style={{marginLeft:"36%"}} control={<Switch onClick={sortData}/>} label="Sort By Date" />
            </div>
      <Scrollbars style={{ height: '400px' }}>
        <div className="table-container" style={{ marginTop: '1%', marginLeft: '20%', width: '60%', overflowY: 'auto', height: '300px'}}>
<Slide in={!trigger }>

          <table className="table" style={{opacity:'85%'}}>
            <thead>
              <tr>
                <th style={{ backgroundColor: '#F5D431', position: 'sticky', top: 0 }}>Sl No</th>
                <th style={{ backgroundColor: '#F5D431', position: 'sticky', top: 0 }}>Patient Name</th>
                <th style={{ backgroundColor: '#F5D431', position: 'sticky', top: 0 }}>Room No</th>
                <th style={{ backgroundColor: '#F5D431', position: 'sticky', top: 0 }}>Admited Date</th>
                <th style={{ backgroundColor: '#F5D431', position: 'sticky', top: 0 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(filteredData.length > 0 ? filteredData : store).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.PatientName}</td>
                    <td>{item.RoomNo}</td>
                    <td>{item.AdmitedDate}</td>
                    <td>
                      <button onClick={() => handleOpen(item)} className="btn btn-success m-1">
                        <i className="fas fa-eye"></i>
                      </button>
                      <Link to={`/UpdateForm/${item.id}`}>
                        <button className="btn btn-danger m-1">
                          <i className="fas fa-pencil"></i>
                        </button>
                      </Link>
                      <button className="btn btn-warning m-1" onClick={() => handledelete(item)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </Slide>
        </div>
        <div>
      <Link to="/Filldetails">
        <button className="btn btn-danger" style={{ transform: 'translate(0%, 90%)' }}>
          Back
        </button>
      </Link>
      </div>
      </Scrollbars>
      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box>
            <Viewcard send={selectedUser} close={handleClose} />
          </Box>
        </Modal>
      </div>

      <Modal
        open={close}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Delcard store={store} setStore={setStore} data={selectedUser} del={handledelete} cl={handleClose1} />
        </Box>
      </Modal> 
      <Footer />
    </div>
  );
}
