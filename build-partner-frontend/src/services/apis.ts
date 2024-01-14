// actions.js (continued)
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { CreateProjectRequestBody } from './apiTypes';
import { AreaState } from '../redux/slices/projectSlice';


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

export const getAreaComponent = async(aread_id: number, component_id: number) => {
    const response = await axios.get(`http://localhost:3000/areas/${aread_id}?component_area_id=${component_id}`)
    return response;
}

export const patchProjectAreas = async(areas: AreaState[]) => {
    const response = await axios.patch('http://localhost:3000/areas/', areas);
    return response;
}