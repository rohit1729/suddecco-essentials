import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';
import style from './project.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {Link} from 'react-router-dom'
import { addProjectDetail } from '../../redux/slices/projectSlice';
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../redux/store'

function Project() {
    const dispatch = useDispatch()
    let project_name: string = ""
    let project_postcode: string = ""
    let project_first_line_address: string = ""
    let project_second_line_address: string = ""
    let project_city: string = ""

    const handleNextClick = () => {
        return (event: React.MouseEvent) => {
            const item = {
                            name: project_name, postcode: project_postcode, 
                            first_line_address: project_first_line_address, 
                            second_line_address: project_second_line_address, 
                            city: project_city
                        }
            dispatch(addProjectDetail(item))
        }
    };

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const id = event.target.id
        if (id == "project_name"){
            project_name = event.target.value
        }
        if (id == "project_postcode"){
            project_postcode = event.target.value
        }
        if (id == "project_first_line_address"){
            project_first_line_address = event.target.value
        }
        if (id == "project_second_line_address"){
            project_second_line_address = event.target.value
        }
        if (id == "project_city"){
            project_city = event.target.value
        }
    }

    const getFieldValue = (id: string) => {
        if (id == "project_name"){
            return store.getState().project.name
        }
        if (id == "project_postcode"){
            return store.getState().project.postcode
        }
        if (id == "project_first_line_address"){
            return store.getState().project.first_line_address
        }
        if (id == "project_second_line_address"){
            return store.getState().project.second_line_address
        }
        if (id == "project_city"){
            return store.getState().project.city
        }
        return ""
    }
    return (
      <div >
        <Header tabValue="project" />
        <div className={style.project_container}>
            <div style={{display: "flex", justifyContent: "flex-end", marginLeft: "10%", marginRight: "5%", marginTop: "16px"}}>
                <Link to="/standard">
                    <Button onClick={handleNextClick()} endIcon={<ArrowForwardOutlinedIcon />} style={{backgroundColor: "green", borderRadius: "24px", fontWeight: "550"}} variant="contained">
                        Next
                    </Button>
                </Link>
            </div>
            <h1 style={{marginTop: "12px"}}> Create Project </h1>
            <div className={style.project_questionnaire}>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="project_name" label="Name" variant="standard" onChange={handleTextFieldChange} defaultValue={getFieldValue("project_name")}/>
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="project_postcode" label="Postcode" variant="standard" onChange={handleTextFieldChange} defaultValue={getFieldValue("project_postcode")}/>
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="project_first_line_address" label="First line address" onChange={handleTextFieldChange} variant="standard" defaultValue={getFieldValue("project_first_line_address")}/>
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="project_second_line_address" label="Second line address" onChange={handleTextFieldChange} variant="standard" defaultValue={getFieldValue("project_second_line_address")}/>
                </div>
                <div className={style.question_wrapper_div}>
                    <TextField style={{width: "50%"}} id="project_city" label="City" variant="standard" onChange={handleTextFieldChange} defaultValue={getFieldValue("project_city")}/>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Project;