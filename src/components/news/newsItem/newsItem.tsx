import './newsItem.scss'

import { FC } from 'react'

import Image from 'next/image'

import noneImg from '@/assets/imgs/none.png'

const NewsItem: FC = () => {
	return (
		<>
			<div className='news-item'>
				<Image src={noneImg} alt='news' />
				<h2 className='title-text'>Название новости</h2>
				<p className='description-text'>Текст новости</p>
			</div>
		</>
	)
}

export default NewsItem
