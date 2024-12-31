import './globalSearch.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'
import { INews } from '@/types/INews'

import Image from 'next/image'
import Link from 'next/link'

import GlobalInput from '@/UI/inputs/globalInput/globalInput'
import GlobalButton from '@/UI/buttons/globalButton/globalButton'
import Spinner from '@/UI/preloaders/spinner/spinner'

import searchImg from '@/assets/icons/search.png'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import {
	setShowGlobalResults,
	setSearchGlobalResults,
} from '@/store/reducers/globalSearchSlice'

import { useState, useEffect } from 'react'

import { api } from '@/services/recipeServices'

const GlobalSearch: FC = () => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('')

	const { showGlobalResults, searchGlobalResults } = useAppSelector(
		(state) => state.globalSearchReducer
	)

	const {
		data: recipes,
		isLoading: recipesLoading,
		isFetching: recipesFetching,
		error: recipesError,
	} = api.useGetAllRecipesQuery({
		search: searchGlobalResults,
		per_page: '',
	})
	const {
		data: news,
		isLoading: newsLoading,
		isFetching: newsFetching,
		error: newsError,
	} = api.useGetAllNewsQuery({
		search: searchGlobalResults,
		per_page: '',
	})

	const handleOutsideClick = (event: MouseEvent) => {
		if (
			event.target instanceof HTMLElement &&
			!event.target.closest('.global-search')
		) {
			dispatch(setShowGlobalResults(false))
		} else if (
			event.target instanceof HTMLElement &&
			event.target.closest('.global-search__result')
		) {
			dispatch(setShowGlobalResults(false))
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)
		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	useEffect(() => {
		setValue(searchGlobalResults)
	}, [searchGlobalResults])

	return (
		<div className='global-search'>
			<GlobalInput
				placeholder='Поиск'
				defaultValue={searchGlobalResults}
				onChange={(e) => setValue(e.target.value)}
				onClick={() => dispatch(setShowGlobalResults(true))}
			/>
			<GlobalButton
				onClick={() => {
					dispatch(setShowGlobalResults(true))
					dispatch(setSearchGlobalResults(value))
				}}>
				<Image src={searchImg} alt='search' />
			</GlobalButton>
			{showGlobalResults && (
				<div className='global-search__results'>
					<p className='title-text'>Список рецептов</p>
					{recipes &&
						recipes.data.map((recipe: IRecipe) => (
							<Link
								href={`/recipes/${recipe.id}`}
								key={recipe.id}
								className='global-search__result'>
								<p className='description-text'>
									{recipe.id} {recipe.title}
								</p>
							</Link>
						))}
					{recipesLoading && <Spinner />}
					{recipesFetching && !recipesLoading && <Spinner />}
					{recipesError && (
						<h2 className='error-text'>Ошибка при загрузки данных</h2>
					)}
					{recipes?.data.length === 0 &&
						!recipesLoading &&
						!recipesFetching && (
							<h2 className='description-text'>Рецепты не найдены</h2>
						)}
					<p className='title-text'>Список новостей</p>
					{news &&
						news.data.map((news: INews) => (
							<Link
								href={`/list-of-news/${news.id}`}
								key={news.id}
								className='global-search__result'>
								<p className='description-text'>
									{news.id} {news.title}
								</p>
							</Link>
						))}
					{newsLoading && <Spinner />}
					{newsFetching && !newsLoading && <Spinner />}
					{newsError && (
						<h2 className='error-text'>Ошибка при загрузки данных</h2>
					)}
					{news?.data.length === 0 && !newsLoading && !newsFetching && (
						<h2 className='description-text'>Новости не найдены</h2>
					)}
				</div>
			)}
		</div>
	)
}

export default GlobalSearch
