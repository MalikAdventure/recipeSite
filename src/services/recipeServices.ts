import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	reducerPath: 'recipeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/',
	}),
	tagTypes: ['News', 'Recipe'],
	endpoints: (builder) => ({
		getAllNews: builder.query({
			query: ({ page = 1, per_page = 6, search }) => ({
				url: '/news',
				params: { _page: page, _per_page: per_page, title: search },
			}),
			providesTags: ['News'],
		}),
		getNewsById: builder.query({
			query: (id) => ({
				url: `/news`,
				params: { id },
			}),
			providesTags: ['News'],
		}),
		createNews: builder.mutation({
			query: ({ title, body, data_created, data_updated }) => ({
				url: '/news',
				method: 'POST',
				body: { title, body, data_created, data_updated },
			}),
			invalidatesTags: ['News'],
		}),
		updateNews: builder.mutation({
			query: ({ id, title, body, data_created, data_updated }) => ({
				url: `/news/${id}`,
				method: 'PUT',
				body: { title, body, data_created, data_updated },
			}),
			invalidatesTags: ['News'],
		}),
		deleteNews: builder.mutation({
			query: (id) => ({
				url: `/news/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['News'],
		}),
		getAllRecipes: builder.query({
			query: ({
				page = 1,
				per_page = 6,
				sort = '',
				option = '',
				search = '',
				filter = [],
			}) => {
				const params: { [key: string]: string } = {
					_page: page,
					_per_page: per_page,
					_sort: sort,
					title: search,
				}
				if (option === 'new') {
					params._sort = '-data_updated'
				} else if (option === 'old') {
					params._sort = 'data_updated'
				} else {
					params._sort = ''
				}
				filter.forEach(({ name, value }: { name: string; value: string }) => {
					params[name] = value
				})
				return {
					url: '/recipes',
					params,
				}
			},
			providesTags: ['Recipe'],
		}),
		getRecipeById: builder.query({
			query: (id) => ({
				url: `/recipes`,
				params: { id },
			}),
			providesTags: ['Recipe'],
		}),
		createRecipe: builder.mutation({
			query: ({
				title,
				body,
				cooking_time,
				calories_per_100_grams,
				type_of_meal,
				type_of_dish,
				world_cuisine,
				data_created,
				data_updated,
			}) => ({
				url: '/recipes',
				method: 'POST',
				body: {
					title,
					body,
					cooking_time,
					calories_per_100_grams,
					type_of_meal,
					type_of_dish,
					world_cuisine,
					data_created,
					data_updated,
				},
			}),
			invalidatesTags: ['Recipe'],
		}),
		updateRecipe: builder.mutation({
			query: ({
				id,
				title,
				body,
				cooking_time,
				calories_per_100_grams,
				type_of_meal,
				type_of_dish,
				world_cuisine,
				data_created,
				data_updated,
			}) => ({
				url: `/recipes/${id}`,
				method: 'PUT',
				body: {
					title,
					body,
					cooking_time,
					calories_per_100_grams,
					type_of_meal,
					type_of_dish,
					world_cuisine,
					data_created,
					data_updated,
				},
			}),
			invalidatesTags: ['Recipe'],
		}),
		deleteRecipe: builder.mutation({
			query: (id) => ({
				url: `/recipes/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Recipe'],
		}),
		getAllSeasonalRecipes: builder.query({
			query: (season) => ({
				url: '/seasonalRecipes',
				params: { season },
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
