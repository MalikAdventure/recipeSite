import './newsItem.scss'

import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import noneImg from '@/assets/imgs/none.png'

const NewsItem: FC = () => {
	return (
		<>
			<Link href='/list-of-news/news' className='news-item'>
				<Image src={noneImg} alt='news' />
				<h2 className='title-text'>Название новости</h2>
				<p className='description-text'>Текст новости</p>
			</Link>
		</>
	)
}

export default NewsItem
