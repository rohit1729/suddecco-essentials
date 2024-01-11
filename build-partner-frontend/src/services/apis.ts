// actions.js (continued)
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { CreateProjectRequestBody } from './apiTypes';


export const createProject =  async(body: CreateProjectRequestBody) => {
    const response = await axios.post('http://localhost:3000/projects', body);
    return response;
};

export const getProjectAreas =  async(project_id: number) => {
    const response = await axios.get(`http://localhost:3000/projects/${project_id}/areas`);
    return response;
};

export const getProjectTasks =  async(project_id: number) => {
    const response = await axios.get(`http://localhost:3000/projects/${project_id}/tasks`);
    return response;
};

export const getStageTasks =  async(stage_id: number) => {
    const response = await axios.get(`http://localhost:3000/stages/${stage_id}/tasks`);
    return response;
};

export const getCategoryMaterials = async(category_id: number) => {
    const response = await axios.get(`http://localhost:3000/material_categories/${category_id}/materials`)
    return response;
}