import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AllNewsState {
	page: number
}

const initialState: AllNewsState = {
	page: 1,
}

export const allNewsSlice = createSlice({
	name: 'allNews',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
	},
})

export const { changePage } = allNewsSlice.actions
export default allNewsSlice.reducer
