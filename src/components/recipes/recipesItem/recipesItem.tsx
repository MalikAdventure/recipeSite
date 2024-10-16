import './recipesItem.scss'

import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import noneImg from '@/assets/imgs/none.png'

const RecipesItem: FC = () => {
	return (
		<Link href='/recipes/recipe' className='recipes-item'>
			<Image src={noneImg} alt='recipe' priority />
			<h3 className='recipes-item__title title-text'>Название рецепта</h3>
		</Link>
	)
}

export default RecipesItem
