import { combineReducers, configureStore } from '@reduxjs/toolkit'
import upReducer from './reducers/upSlice'
import modalReducer from './reducers/modalSlice'
import calorieCalculatorReducer from './reducers/calorieCalculatorSlice'
import newsReducer from './reducers/newsSlice'
import contextReducer from './reducers/contextSlice'
import recipesReducer from './reducers/recipesSlice'
import globalSearchReducer from './reducers/globalSearchSlice'
import { api } from '@/services/recipeServices'

const rootReducer = combineReducers({
	upReducer,
	modalReducer,
	calorieCalculatorReducer,
	newsReducer,
	contextReducer,
	recipesReducer,
	globalSearchReducer,
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
