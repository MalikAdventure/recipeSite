import './recipesList.scss'

import { FC } from 'react'

import RecipesItem from '../recipesItem/recipesItem'
import UsualSearch from '@/fragments/usualSearch/usualSearch'
import RecipeFilter from '@/fragments/recipeFilter/recipeFilter'

import UsualButton from '@/UI/buttons/usualButton/usualButton'

const RecipesList: FC = () => {
	return (
		<div className='recipes-list'>
			<h1 className='recipes-list__title title-text'>Рецепты</h1>
			<UsualSearch
				placeholder='Поиск рецепта'
				className='recipes-list__search'
			/>
			<RecipeFilter />
			<div className='recipes-list__box'>
				<RecipesItem />
				<RecipesItem />
				<RecipesItem />
				<RecipesItem />
				<RecipesItem />
				<RecipesItem />
				<RecipesItem />
				<RecipesItem />
			</div>
			<UsualButton className='recipes-list__button'>Показать еще</UsualButton>
		</div>
	)
}

export default RecipesList
