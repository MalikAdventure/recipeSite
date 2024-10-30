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
	return (
		<>
			<Link href={`/list-of-news/${news.id}`} className='news-item'>
				<Image src={noneImg} alt='news' priority />
				<h2 className='news-item__title title-text'>
					{`${news.id} `}
					{news.title.length > 50
						? `${news.title.slice(0, 60)}...`
						: news.title}
				</h2>
				<p className='description-text'>
					{news.body.length > 200 ? `${news.body.slice(0, 200)}...` : news.body}
				</p>
			</Link>
		</>
	)
}

export default NewsItem
