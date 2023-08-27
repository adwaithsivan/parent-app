import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import '../css/accountchange.css'
import { useNavigate } from 'react-router-dom';



export default function AccountChange() {
    const navigate = useNavigate()
  const [state, setState] = React.useState({
    bottom: false,
  });
  const handleNavigate = () => {
    navigate('/home')
}
const handleNavigate2 = () => {
  navigate('/rechargepage2')
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className="box"
      sx={{ height: anchor === 'top' || anchor === 'top' ? 'auto' : 520 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
   {/* list */}
   <div className="list-group" onClick={handleNavigate}>  
  <div className='profile-pic-name'>
  <img src={require('../assets/02/Mask Group 3.png')} id='account-profile'></img>
  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
    Rahul Radhakrishnan
  </a>
  </div>
 <div className='profile-details'>
 <p>Card No:25334327</p>
<p>Class IV B</p>
 </div>
</div>  

<div className="list-group" onClick={handleNavigate2}>  
  <div className='profile-pic-name'>
  <img src={require('../assets/03/Mask Group 7.png')} id='account-profile'></img>
  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
    Rita Radhakrishnan
  </a>
  </div>
 <div className='profile-details'>
 <p>Card No:25334327</p>
<p>Class V B</p>
 </div>
</div> 

  
     
      <List className='list'>
        {['Rahul Radhakrishnan','Rita Radhakrishnan'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
           
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='profile-switch'>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
    <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/737373/user-male-circle.png" alt="user-male-circle" id='account'/>
          <p className='switch-btn' onClick={toggleDrawer(anchor,true)}>Change Account</p>
          <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1"/>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}