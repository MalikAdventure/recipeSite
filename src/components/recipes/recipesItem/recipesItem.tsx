import './recipesItem.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'

import Image from 'next/image'
import Link from 'next/link'

import noneImg from '@/assets/imgs/none.png'

interface IRecipeItem {
	recipe: IRecipe
}

const RecipesItem: FC<IRecipeItem> = ({ recipe }) => {
	return (
		<>
			<Link href={`/recipes/${recipe.id}`} className='recipes-item'>
				<Image src={noneImg} alt='recipe' priority />
				<h2 className='recipes-item__title title-text'>
					{`${recipe.id} `}
					{recipe.title.length > 50
						? `${recipe.title.slice(0, 60)}...`
						: recipe.title}
				</h2>
				<p className='description-text'>
					{recipe.body.length > 200
						? `${recipe.body.slice(0, 200)}...`
						: recipe.body}
				</p>
			</Link>
		</>
	)
}

export default RecipesItem
