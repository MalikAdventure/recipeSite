'use client'

import './recipesDetailed.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'

import Image from 'next/image'

import Spinner from '@/UI/preloaders/spinner/spinner'

import noneImg from '@/assets/imgs/none.png'

import { api } from '@/services/recipeServices'
import { useParams } from 'next/navigation'

const RecipesDetailed: FC = () => {
	const params = useParams()

	const { data, isLoading, isFetching, error } = api.useGetRecipeByIdQuery(
		params.id
	)

	return (
		<>
			<div className='recipes-detailed'>
				{data &&
					data.map((recipe: IRecipe) => (
						<div key={recipe.id}>
							<h1 className='title-text'>
								{recipe.id} {recipe.title}
							</h1>
							<Image src={noneImg} alt='recipe' priority />
							<p className='description-text'>{recipe.body}</p>
						</div>
					))}
				{isLoading && <Spinner />}
				{isFetching && !isLoading && <Spinner />}
				{error && <h2 className='error-text'>Ошибка при загрузки данных</h2>}
			</div>
		</>
	)
}

export default RecipesDetailed
