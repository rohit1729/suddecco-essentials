import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './header.module.css';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Project from '../../pages/project';
import { HistoryRouterProps } from 'react-router-dom';
import Area from '../../pages/area';
import { useNavigate } from 'react-router-dom';


const Header = (props: any) => {
  let navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    
  };

  const getIcon = (current_value: string) => {
    if (current_value == props.tabValue){
        return < CheckCircleRoundedIcon />
    }else{
        return < RadioButtonUncheckedRoundedIcon />
    }
  }

  const handleTabClick = (event: any, path: string) => {
    event.preventDefault();
    navigate(path);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: "1px" }}>
      <Tabs style={{height: "64px"}} value={props.tabValue} onChange={handleChange} centered>
        <Tab icon={getIcon("project")} href='/project' iconPosition="start" onClick={(e) => handleTabClick(e, "/project")} style={{height: "64px"}} value="project" label="Project Info"/>
        <Tab icon={getIcon("areas")} href='/areas' iconPosition="start" onClick={(e) => handleTabClick(e, "/areas")} style={{height: "64px"}} value="areas" label="Areas" />
        <Tab icon={getIcon("dashboard")} href='/dashboard' onClick={(e) => handleTabClick(e, "/dashboard")} iconPosition="start" style={{height: "64px"}} value="dashboard" label="Dashboard" />
        <Tab icon={getIcon("team")} href='/team' iconPosition="start" onClick={(e) => handleTabClick(e, "/team")} style={{height: "64px"}} value="team" label="Team" />
        <Tab icon={getIcon("schedule")} href='/schedule' iconPosition="start" onClick={(e) => handleTabClick(e, "/schedule")} style={{height: "64px"}} value="schedule" label="Schedule" />
        <Tab icon={getIcon("quotes")} iconPosition="start" onClick={(e) => handleTabClick(e, "/quotes")} style={{height: "64px"}} value="quotes" label="Quotes" />
      </Tabs>
    </Box>
  );
}
export default Header;