import './recipesDetailed.scss'

import { FC } from 'react'

import Image from 'next/image'

import noneImg from '@/assets/imgs/none.png'

const RecipesDetailed: FC = () => {
	return (
		<>
			<div className='recipes-detailed'>
				<h1 className='title-text'>Название рецепта</h1>
				<Image src={noneImg} alt='recipe' priority />
				<p className='description-text'>Текст рецепта</p>
			</div>
		</>
	)
}

export default RecipesDetailed
