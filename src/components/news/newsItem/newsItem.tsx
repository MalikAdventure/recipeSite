import './newsItem.scss'

import { FC } from 'react'

import Image from 'next/image'

import newsImg from '@/assets/imgs/news.png'

const NewsItem: FC = () => {
	return (
		<>
			<div className='news-item'>
				<Image src={newsImg} alt='news' />
				<h2 className='title-text'>Название новости</h2>
				<p className='description-text'>Текст новости</p>
			</div>
		</>
	)
}

export default NewsItem
