import './recipesItem.scss'

import { FC } from 'react'

import Image from 'next/image'

import noneImg from '@/assets/imgs/none.png'

const RecipesItem: FC = () => {
	return (
		<div className='recipes-item'>
			<Image src={noneImg} alt='recipe' />
			<h3 className='recipes-item__title title-text'>Название рецепта</h3>
		</div>
	)
}

export default RecipesItem
