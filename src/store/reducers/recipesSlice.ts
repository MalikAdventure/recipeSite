import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RecipesState {
	page: number
	option: string
	search: string
	filter: { name: string; value: string }[]
}

const initialState: RecipesState = {
	page: 1,
	option: '',
	search: '',
	filter: [],
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
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setFilter: (
			state,
			action: PayloadAction<{ name: string; value: string }>
		) => {
			const index = state.filter.findIndex(
				(item) => item.name === action.payload.name
			)
			if (index !== -1) {
				if (state.filter[index].value === action.payload.value) {
					state.filter.splice(index, 1)
				} else {
					state.filter[index].value = action.payload.value
				}
			} else {
				state.filter.push({
					name: action.payload.name,
					value: action.payload.value,
				})
			}
		},
		deleteFilter: (state) => {
			state.filter = []
		}
	},
})

export const { changePage, setOption, setSearch, setFilter, deleteFilter } =
	recipesSlice.actions
export default recipesSlice.reducer
