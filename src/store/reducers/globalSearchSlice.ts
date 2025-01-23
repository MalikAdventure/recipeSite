import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GlobalSearchState {
	showGlobalResults: boolean
	searchGlobalResults: string
}

const initialState: GlobalSearchState = {
	showGlobalResults: false,
	searchGlobalResults: '',
}

export const globalSearchSlice = createSlice({
	name: 'globalSearch',
	initialState,
	reducers: {
		setShowGlobalResults: (state, action: PayloadAction<boolean>) => {
			state.showGlobalResults = action.payload
		},
		setSearchGlobalResults: (state, action: PayloadAction<string>) => {
			state.searchGlobalResults = action.payload
		}
	},
})

export const { setShowGlobalResults, setSearchGlobalResults } = globalSearchSlice.actions
export default globalSearchSlice.reducer
