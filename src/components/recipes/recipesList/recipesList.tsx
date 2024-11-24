'use client'

import './recipesList.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'

import RecipesItem from '../recipesItem/recipesItem'
import UsualSearch from '@/fragments/usualSearch/usualSearch'
import RecipeFilter from '@/fragments/recipeFilter/recipeFilter'
import Spinner from '@/UI/preloaders/spinner/spinner'
import PaginationButtons from '@/fragments/paginationButtons/paginationButtons'

import { api } from '@/services/recipeServices'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { changePage } from '@/store/reducers/recipesSlice'

import { getPageCount } from '@/utils/pagePagination/pagePagination'

const RecipesList: FC = () => {
	const dispatch = useAppDispatch()
	const { page } = useAppSelector((state) => state.recipesReducer)
	const { option } = useAppSelector((state) => state.recipesReducer)
	const per_page = 6

	const { data, isLoading, isFetching, error } = api.useGetAllRecipesQuery({
		page,
		per_page,
		option,
	})

	const totalCount = data?.items
	const totalPages = getPageCount(totalCount, per_page)

	return (
		<div className='recipes-list'>
			<h1 className='recipes-list__title topic-text'>Рецепты</h1>
			<UsualSearch
				placeholder='Поиск рецепта'
				className='recipes-list__search'
			/>
			<RecipeFilter />
			<div className='recipes-list__box'>
				{data &&
					data.data.map((recipe: IRecipe) => (
						<RecipesItem key={recipe.id} recipe={recipe} />
					))}
				{isLoading && <Spinner />}
				{isFetching && !isLoading && <Spinner />}
				{error && (
					<h2 className='book-cards-list__text error-text'>
						Ошибка при загрузки данных
					</h2>
				)}
			</div>
			{data && (
				<PaginationButtons
					totalPages={totalPages}
					page={page}
					changePage={(page: number) => dispatch(changePage(page))}
				/>
			)}
		</div>
	)
}

export default RecipesList
