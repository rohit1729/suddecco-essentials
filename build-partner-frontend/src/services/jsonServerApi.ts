import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateProjectRequestBody, ProjectArea } from './apiTypes';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    createProject: builder.mutation({
        query: (body: CreateProjectRequestBody) => ({
            url: `projects`,
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
        })
    }),
    fetchProjectAreas: builder.query<ProjectArea[], number>({
      query: (project_id) => `projects/${project_id}/areas`,
      transformResponse: (response: any) => response.areas
    }),
  }),
});

export const { useCreateProjectMutation, useFetchProjectAreasQuery } = jsonServerApi;