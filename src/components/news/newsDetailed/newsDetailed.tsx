'use client'

import './newsDetailed.scss'

import { FC } from 'react'
import { INews } from '@/types/INews'

import Image from 'next/image'

import Spinner from '@/UI/preloaders/spinner/spinner'

import noneImg from '@/assets/imgs/none.png'

import { api } from '@/services/recipeServices'
import { useParams } from 'next/navigation'

const NewsDetailed: FC = () => {
	const params = useParams()

	const { data, isLoading, isFetching, error } = api.useGetNewsByIdQuery(
		params.id
	)

	return (
		<>
			<div className='news-detailed'>
				{data &&
					data.map((news: INews) => (
						<div key={news.id}>
							<h1 className='title-text'>
								{news.id} {news.title}
							</h1>
							<Image src={noneImg} alt='news' priority />
							<p className='description-text'>{news.body}</p>
						</div>
					))}
				{isLoading && <Spinner />}
				{isFetching && !isLoading && <Spinner />}
				{error && (
					<h2 className='error-text'>
						Ошибка при загрузки данных
					</h2>
				)}
			</div>
		</>
	)
}

export default NewsDetailed
