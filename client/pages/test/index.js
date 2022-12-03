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

  let str = "I have a cat, a dog, and a goat.";
  const mapObj = {
    div: "Container",
    "<span": "<Typography variant='p' component='span'",
    span: "Typography",
    "<p": "<Typography variant='p' component='p'",
    p: "Typography",
    "<h1": "<Typography variant='h1' component='h1'",
    h1: "Typography",
    "<h2": "<Typography variant='h2' component='h2'",
    h2: "Typography",
    "<h3": "<Typography variant='h3' component='h3'",
    h3: "Typography",
    "<h4": "<Typography variant='h4' component='h4'",
    h4: "Typography",
};
str = str.replace(/\b(?:div|<span|span|<p|p|<h1|h1|<h2|h2|<h3|h3|<h4|h4)\b/gi, matched => mapObj[matched]);
console.log(str);

  return (
    <Box sx={{ maxWidth: 'sm', margin:"auto" }}>
      <h1>Wells</h1>
    </Box>
  );
}