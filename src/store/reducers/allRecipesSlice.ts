import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AllRecipesState {
	page: number
}

const initialState: AllRecipesState = {
	page: 1,
}

export const allRecipesSlice = createSlice({
	name: 'allRecipes',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
	},
})

export const { changePage } = allRecipesSlice.actions
export default allRecipesSlice.reducer
