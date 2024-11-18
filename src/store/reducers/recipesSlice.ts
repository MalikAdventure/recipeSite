import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IRecipe } from '@/types/IRecipe'

export interface RecipesState {
	page: number
	recipes: IRecipe[]
}

const initialState: RecipesState = {
	page: 1,
	recipes: [],
}

export const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setRecipes: (state, action: PayloadAction<IRecipe[]>) => {
			const newRecipes = action.payload.filter(
				(recipe) => !state.recipes.some((r) => r.id === recipe.id)
			)
			state.recipes = [...state.recipes, ...newRecipes]
		},
		deleteRecipes: (state) => {
			state.recipes = []
			state.page = 1
		},
	},
})

export const { changePage, setRecipes, deleteRecipes } = recipesSlice.actions
export default recipesSlice.reducer
