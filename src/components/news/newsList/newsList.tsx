'use client'

import './newsList.scss'

import { FC } from 'react'
import { INews } from '@/types/INews'

import Link from 'next/link'

import NewsItem from '../newsItem/newsItem'
import Spinner from '@/UI/preloaders/spinner/spinner'
import PaginationButtons from '@/fragments/paginationButtons/paginationButtons'

import { api } from '@/services/recipeServices'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { changePage } from '@/store/reducers/allNewsSlice'

import { getPageCount } from '@/utils/pagePagination/pagePagination'

const NewsList: FC = () => {
	const dispatch = useAppDispatch()
	const { page } = useAppSelector((state) => state.allNewsReducer)
	const per_page = 6

	const { data, isLoading, isFetching, error } = api.useGetAllNewsQuery({
		page,
		per_page,
	})

	const totalCount = data?.items
	const totalPages = getPageCount(totalCount, per_page)

	const { contextPage } = useAppSelector((state) => state.contextReducer)

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
					{data &&
						data.data.map((news: INews) => (
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
				{data && contextPage === 'listOfNews' && (
					<PaginationButtons
						totalPages={totalPages}
						page={page}
						changePage={(page: number) => dispatch(changePage(page))}
					/>
				)}
			</div>
		</>
	)
}

export default NewsList
