'use client'

import './recipesList.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'

import RecipesItem from '../recipesItem/recipesItem'
import UsualSearch from '@/fragments/usualSearch/usualSearch'
import RecipeFilter from '@/fragments/recipeFilter/recipeFilter'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import Spinner from '@/UI/preloaders/spinner/spinner'

import { api } from '@/services/recipeServices'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import {
	changePage,
	setRecipes,
	deleteRecipes,
} from '@/store/reducers/recipesSlice'

import { getPageCount } from '@/utils/pagePagination/pagePagination'

import { useEffect } from 'react'

const RecipesList: FC = () => {
	const dispatch = useAppDispatch()
	const { page, recipes } = useAppSelector((state) => state.recipesReducer)
	const per_page = 6

	const { data, isLoading, isFetching, error } = api.useGetAllRecipesQuery({
		page,
		per_page,
	})

	const totalCount = data?.items
	const totalPages = getPageCount(totalCount, per_page)

	useEffect(() => {
		if (data) {
			dispatch(setRecipes(data.data))
		}
	}, [data, dispatch])

	return (
		<div className='recipes-list'>
			<h1 className='recipes-list__title topic-text'>Рецепты</h1>
			<UsualSearch
				placeholder='Поиск рецепта'
				className='recipes-list__search'
			/>
			<RecipeFilter />
			<div className='recipes-list__box'>
				{recipes.map((recipe: IRecipe) => (
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
			<div className='recipes-list__buttons'>
				{data && page < totalPages && (
					<UsualButton
						onClick={() => dispatch(changePage(page + 1))}
						className='recipes-list__button'>
						Показать еще
					</UsualButton>
				)}
				{data && page > 1 && (
					<UsualButton
						onClick={() => dispatch(deleteRecipes())}
						className='recipes-list__button'>
						Скрыть рецепты
					</UsualButton>
				)}
			</div>
		</div>
	)
}

export default RecipesList
