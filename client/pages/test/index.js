import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Loading from '../../components/main/Loading';
import LoginRegister from '../../components/signin/LoginRegister';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [userLogin, setUserLogin] = React.useState({
    password: "",
    username:""
  })

  const [userRegister, setUserRegister] = React.useState({
    name: "",
    username:""
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 'sm', margin:"auto" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#dce4e7' }}>
          <TabList onChange={handleChange} textColor="primary.main" centered TabIndicatorProps={{style:{height:"2px"}}}>
            <Tab label="Login" value="1" active sx={{width:"50%"}} />
            <Tab label="Register" value="2"  sx={{width:"50%"}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <LoginRegister
            type="login"
            user={userLogin}
            setUser={setUserLogin}
          />
        </TabPanel>
        <TabPanel value="2">
          <LoginRegister
            type="register"
            user={userRegister}
            setUser={setUserRegister}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}