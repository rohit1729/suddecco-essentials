import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useCreateProjectMutation, useFetchProjectAreasQuery } from '../../services/jsonServerApi';
import { CreateProjectRequestBody, ProjectArea } from '../../services/apiTypes';
import { updateProjectDetail, updateProjectAreas } from '../../redux/slices/projectSlice';
import { store } from '../../redux/store'
QueryP

function Area() {
    const  [ createProject ] = useCreateProjectMutation();
    const project_id: number = -1;
    const { data, error, isLoading } =  useFetchProjectAreasQuery(project_id, {skip: project_id == -1})
    const dispatch = useDispatch()

    const handleClick = () => {
      return (event: React.MouseEvent) => {
        submitProject()
      }
    };

    async function submitProject(){
      const selected_areas: number[] = []
      const area_map = store.getState().project.area_selection
      for (const key in area_map){
        const value = area_map[key]
        for (var i = 0; i < value; ++i){
          selected_areas.push(parseInt(key))
        }
      }
      const body: CreateProjectRequestBody = {
        name: store.getState().project.name,
        city: store.getState().project.city,
        user_id: 1,
        areas: selected_areas
      }
      const results = await createProject(body)
      dispatch(updateProjectDetail(results))
      
      const project_id = store.getState().project.id;
      let areas: ProjectArea[] = [];
      console.log("$$$$$$$$$")
      if (data != undefined){
        areas = data
      }
      dispatch(updateProjectAreas(areas))
      console.log("##############")
      console.log(store.getState().project.areas)
    }

    return (
      <div >
        <Header tabValue="areas" />
        <p>HAHA FROM AREA</p>
        <div>
          <button onClick={handleClick()}> Submit Project </button>
        </div>
      </div>
    );
}

export default Area;