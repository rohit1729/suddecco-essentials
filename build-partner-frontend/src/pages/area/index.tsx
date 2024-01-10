import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useCreateProjectMutation, useFetchProjectAreasQuery } from '../../services/jsonServerApi';
import { CreateProjectRequestBody, ProjectArea } from '../../services/apiTypes';
import { updateProjectDetail, updateProjectAreas } from '../../redux/slices/projectSlice';
import { store } from '../../redux/store'
import { createProject, getProjectAreas } from '../../services/apis';

const Area = () => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch()

    const handleClick = () => {
      return (event: React.MouseEvent) => {
        submitProject();
      }
    };

    const submitProject = async () => {
      console.log('Effect triggered on button click');
      const selected_areas: number[] = []
      const area_map = store.getState().project.area_selection
      for (const key in area_map){
        const value = area_map[key]
        for (let i = 0; i < value; ++i){
          selected_areas.push(parseInt(key))
        }
      }
      const body: CreateProjectRequestBody = {
        name: store.getState().project.name,
        city: store.getState().project.city,
        user_id: 1,
        areas: selected_areas
      }
      const results = await createProject(body);
      console.log("haha");
      console.log(results);
      dispatch(updateProjectDetail(results.data));
      console.log(store.getState().project.id);

      const project_areas_response = await getProjectAreas(store.getState().project.id);
      dispatch(updateProjectAreas(project_areas_response.data.areas));
      console.log("printing areas");
      console.log(store.getState().project.areas);
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