import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';
import style from './project.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {Link} from 'react-router-dom'

function Project() {
    return (
      <div >
        <Header tabValue="project" />
        <div className={style.project_container}>
            <div style={{display: "flex", justifyContent: "flex-end", marginLeft: "10%", marginRight: "5%", marginTop: "16px"}}>
                <Link to="/standard">
                    <Button endIcon={<ArrowForwardOutlinedIcon />} style={{backgroundColor: "green", borderRadius: "24px", fontWeight: "550"}} variant="contained">
                        Next
                    </Button>
                </Link>
            </div>
            <h1 style={{marginTop: "12px"}}> Create Project </h1>
            <div className={style.project_questionnaire}>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="outlined-basic" label="Postcode" variant="standard" />
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="outlined-basic" label="First line address" variant="standard" />
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="outlined-basic" label="Second line address" variant="standard" />
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="outlined-basic" label="City" variant="standard" />
                </div>
          
            </div>
        </div>
      </div>
    );
}

export default Project;