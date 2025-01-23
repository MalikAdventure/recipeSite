import './newsItem.scss'

import { FC } from 'react'
import { INews } from '@/types/INews'

import Image from 'next/image'
import Link from 'next/link'

import noneImg from '@/assets/imgs/none.png'

interface INewsItem {
	news: INews
}

const NewsItem: FC<INewsItem> = ({ news }) => {
	const date = new Date(news.data_updated)
	const formattedDate = date.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	})

	return (
		<>
			<Link href={`/list-of-news/${news.id}`} className='news-item'>
				<Image src={noneImg} alt='news' priority className='news-item__img' />
				<h2 className='news-item__title title-text'>
					{`${news.id} `}
					{news.title.length > 50
						? `${news.title.slice(0, 60)}...`
						: news.title}
				</h2>
				<p className='description-text'>
					{news.body.length > 200 ? `${news.body.slice(0, 200)}...` : news.body}
				</p>
				<p className='description-text'>{formattedDate}</p>
			</Link>
		</>
	)
}

export default NewsItem
