import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { INews } from '@/types/INews'

export interface NewsState {
	page: number
	news: INews[]
}

const initialState: NewsState = {
	page: 1,
	news: [],
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setNews: (state, action: PayloadAction<INews[]>) => {
			const newNews = action.payload.filter(
				(recipe) => !state.news.some((r) => r.id === recipe.id)
			)
			state.news = [...state.news, ...newNews]
		},
		deleteNews: (state) => {
			state.news = []
			state.page = 1
		},
	},
})

export const { changePage, setNews, deleteNews } = newsSlice.actions
export default newsSlice.reducer
