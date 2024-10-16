import { combineReducers, configureStore } from '@reduxjs/toolkit'
import upReducer from './reducers/upSlice'

const rootReducer = combineReducers({
	upReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
