import { combineReducers, configureStore } from '@reduxjs/toolkit'
import upReducer from './reducers/upSlice'
import modalReducer from './reducers/modalSlice'
import calorieCalculatorReducer from './reducers/calorieCalculatorSlice'
import allNewsReducer from './reducers/allNewsSlice'
import contextReducer from './reducers/contextSlice'
import { api } from '@/services/recipeServices'

const rootReducer = combineReducers({
	upReducer,
	modalReducer,
	calorieCalculatorReducer,
	allNewsReducer,
	contextReducer,
	[api.reducerPath]: api.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(api.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
