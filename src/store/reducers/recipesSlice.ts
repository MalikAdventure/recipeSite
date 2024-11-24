import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RecipesState {
	page: number
	option: string
}

const initialState: RecipesState = {
	page: 1,
	option: '',
}

export const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setOption: (state, action: PayloadAction<string>) => {
			state.option = action.payload
		},
	},
})

export const { changePage, setOption } = recipesSlice.actions
export default recipesSlice.reducer
