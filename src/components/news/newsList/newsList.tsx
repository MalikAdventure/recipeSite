'use client'

import './newsList.scss'

import { FC, useEffect } from 'react'
import { INews } from '@/types/INews'

import Link from 'next/link'

import NewsItem from '../newsItem/newsItem'
import Spinner from '@/UI/preloaders/spinner/spinner'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

import { api } from '@/services/recipeServices'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { changePage, setNews, deleteNews } from '@/store/reducers/newsSlice'

import { getPageCount } from '@/utils/pagePagination/pagePagination'

const NewsList: FC = () => {
	const dispatch = useAppDispatch()
	const { page, news } = useAppSelector((state) => state.newsReducer)
	const per_page = 6

	const { data, isLoading, isFetching, error } = api.useGetAllNewsQuery({
		page,
		per_page,
	})

	const totalCount = data?.items
	const totalPages = getPageCount(totalCount, per_page)

	const { contextPage } = useAppSelector((state) => state.contextReducer)

	useEffect(() => {
		if (contextPage === 'main') {
			dispatch(deleteNews())
		}
		if (data) {
			dispatch(setNews(data.data))
		}
	}, [data, dispatch, contextPage])

	return (
		<>
			<div className='news-list'>
				<div className='news-list__text'>
					<h2 className='news-list__title topic-text'>Новости</h2>
					{contextPage === 'main' && (
						<Link href='/list-of-news' className='news-list__link link-text'>
							Все новости
						</Link>
					)}
				</div>
				<div className='news-list__box'>
					{news.map((news: INews) => (
						<NewsItem key={news.id} news={news} />
					))}
					{isLoading && <Spinner />}
					{isFetching && !isLoading && <Spinner />}
					{error && (
						<h2 className='book-cards-list__text error-text'>
							Ошибка при загрузки данных
						</h2>
					)}
				</div>
				<div className='news-list__buttons'>
					{data && contextPage === 'listOfNews' && page < totalPages && (
						<UsualButton
							onClick={() => dispatch(changePage(page + 1))}
							className='news-list__button'>
							Показать еще
						</UsualButton>
					)}
					{data && page > 1 && (
						<AttractiveButton
							onClick={() => dispatch(deleteNews())}
							className='news-list__button'>
							Скрыть новости
						</AttractiveButton>
					)}
				</div>
			</div>
		</>
	)
}

export default NewsList
