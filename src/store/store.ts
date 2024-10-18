import { combineReducers, configureStore } from '@reduxjs/toolkit'
import upReducer from './reducers/upSlice'
import filterReducer from './reducers/filterSlice'

const rootReducer = combineReducers({
	upReducer,
	filterReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
