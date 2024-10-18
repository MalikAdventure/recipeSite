import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
	showFilter: boolean
}

const initialState: FilterState = {
	showFilter: false,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setShowFilter: (state, action: PayloadAction<boolean>) => {
			state.showFilter = action.payload
		},
	},
})

export const { setShowFilter } = filterSlice.actions
export default filterSlice.reducer
