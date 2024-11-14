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
		createNews: builder.mutation({
			query: ({ title, body }) => ({
				url: '/news',
				method: 'POST',
				body: { title, body },
			}),
		}),
		getAllRecipes: builder.query({
			query: ({ page = 1, per_page = 6 }) => ({
				url: '/recipes',
				params: { _page: page, _per_page: per_page },
			}),
		}),
		getRecipeById: builder.query({
			query: (id) => ({
				url: `/recipes`,
				params: { id },
			}),
		}),
		createRecipe: builder.mutation({
			query: ({ title, body }) => ({
				url: '/recipes',
				method: 'POST',
				body: { title, body },
			}),
		}),
		getAllAdminsForAuth: builder.query({
			query: ({ email, password }) => ({
				url: '/admins',
				params: { email, password },
			}),
		}),
		getAllUsersForAuth: builder.query({
			query: ({ email, password }) => ({
				url: '/users',
				params: { email, password },
			}),
		}),
		createAccount: builder.mutation({
			query: ({ name, email, password }) => ({
				url: '/users',
				method: 'POST',
				body: { name, email, password },
			}),
		}),
	}),
})
