import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import projectReducer from './slices/projectSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { jsonServerApi } from '../services/jsonServerApi'; 

export const store = configureStore({
  reducer: {
    project: projectReducer,
    counter: counterReducer,
    [jsonServerApi.reducerPath]: jsonServerApi.reducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonServerApi.middleware),
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch