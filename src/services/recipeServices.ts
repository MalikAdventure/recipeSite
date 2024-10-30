import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'recipeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/',
	}),
	endpoints: (builder) => ({
		getAllNews: builder.query({
			query: ({ page = 1, per_page = 6 }) => ({
				url: '/news',
				params: { _page: page, _per_page: per_page },
			}),
		}),
		getNewsById: builder.query({
			query: (id) => ({
				url: `/news`,
				params: { id },
			}),
		}),
	}),
})
