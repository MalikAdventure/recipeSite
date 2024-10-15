import './newsList.scss'

import { FC } from 'react'

import Link from 'next/link'

import NewsItem from '../newsItem/newsItem'

const NewsList: FC = () => {
	return (
		<>
			<div className='news-list'>
				<div className='news-list__text'>
					<h2 className='news-list__title title-text'>Новости</h2>
					<Link href='#' className='news-list__link link-text'>
						Все новости
					</Link>
				</div>
				<div className='news-list__box'>
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
					<NewsItem />
				</div>
			</div>
		</>
	)
}

export default NewsList
