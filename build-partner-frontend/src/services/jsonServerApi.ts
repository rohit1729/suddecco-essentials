import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateProjectRequestBody } from './apiTypes';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    createProject: builder.mutation({
        query: (body: CreateProjectRequestBody) => ({
            url: `projects`,
            method: 'POST',
            body: { body },
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
        })
    })
  }),
});

export const { useCreateProjectMutation } = jsonServerApi;