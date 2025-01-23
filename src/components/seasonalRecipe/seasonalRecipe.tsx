import './seasonalRecipe.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setSeason } from '@/store/reducers/contextSlice'

import Spinner from '@/UI/preloaders/spinner/spinner'

import summerImg from '@/assets/imgs/summer.png'

import { useEffect } from 'react'

import { api } from '@/services/recipeServices'

const SeasonalRecipe: FC = () => {
	const dispatch = useAppDispatch()
	const { season } = useAppSelector((state) => state.contextReducer)

	useEffect(() => {
		if (season === null) {
			const date = new Date()
			const monthNumber = date.getMonth() + 1
			let monthName
			switch (monthNumber) {
				case 12:
				case 1:
				case 2:
					monthName = 'Зима'
					break
				case 3:
				case 4:
				case 5:
					monthName = 'Весна'
					break
				case 6:
				case 7:
				case 8:
					monthName = 'Лето'
					break
				case 9:
				case 10:
				case 11:
					monthName = 'Осень'
					break
				default:
					monthName = null
			}
			dispatch(setSeason(monthName))
		}
	}, [])

	const { data, isLoading, isFetching, error } =
		api.useGetAllSeasonalRecipesQuery(season)

	return (
		<>
			<div
				className='seasonal-recipe'
				style={{
					backgroundImage: `url(${summerImg.src})`,
				}}>
				<div className='seasonal-recipe__content'>
					{data &&
						data?.map((recipe: IRecipe) => (
							<div key={recipe.id}>
								<h2 className='seasonal-recipe__title title-text'>
									{recipe.title}
								</h2>
								<p className='seasonal-recipe__text description-text'>
									{recipe.body}
								</p>
							</div>
						))}
					{data &&
						data?.[0]?.dishes.breakfast?.map((recipe: IRecipe) => (
							<p key={recipe.id} className='description-text'>
								{recipe.id} {recipe.title} {recipe.body}
							</p>
						))}
					{data &&
						data?.[0]?.dishes.lunch?.map((recipe: IRecipe) => (
							<p key={recipe.id} className='description-text'>
								{recipe.id} {recipe.title} {recipe.body}
							</p>
						))}
					{data &&
						data?.[0]?.dishes.dinner?.map((recipe: IRecipe) => (
							<p key={recipe.id} className='description-text'>
								{recipe.id} {recipe.title} {recipe.body}
							</p>
						))}
					{isLoading && <Spinner />}
					{isFetching && !isLoading && <Spinner />}
					{error && <h2 className='error-text'>Ошибка при загрузки данных</h2>}
					{data?.length === 0 && !isLoading && !isFetching && (
						<h2 className='title-text'>Сезонные рецепты не найдены</h2>
					)}
				</div>
			</div>
		</>
	)
}

export default SeasonalRecipe
