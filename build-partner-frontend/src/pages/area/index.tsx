import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { useCreateProjectMutation } from '../../services/jsonServerApi';
import { CreateProjectRequestBody } from '../../services/apiTypes';
import { store } from '../../redux/store'

function Area() {
    const  [ createProject, { isLoading} ] = useCreateProjectMutation();

    const handleClick = () => {
      return (event: React.MouseEvent) => {
        submitProject()
      }
    };

    function submitProject(){
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
      const results = createProject(body)
      console.log(results)
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