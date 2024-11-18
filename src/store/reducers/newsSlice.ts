import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NewsState {
	page: number
}

const initialState: NewsState = {
	page: 1,
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
	},
})

export const { changePage } = newsSlice.actions
export default newsSlice.reducer
