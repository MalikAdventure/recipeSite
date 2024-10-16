import './newsDetailed.scss'

import { FC } from 'react'

import Image from 'next/image'

import noneImg from '@/assets/imgs/none.png'

const newsDetailed: FC = () => {
	return (
		<>
			<div className='news-detailed'>
				<h1 className='title-text'>Название новости</h1>
				<Image src={noneImg} alt='recipe' priority />
				<p className='description-text'>Текст новости</p>
			</div>
		</>
	)
}

export default newsDetailed
