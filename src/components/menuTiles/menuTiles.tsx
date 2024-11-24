import './menuTiles.scss'

import { FC } from 'react'

import Link from 'next/link'

import UsualButton from '@/UI/buttons/usualButton/usualButton'

import breakfastImg from '@/assets/imgs/breakfast.png'
import lunchImg from '@/assets/imgs/lunch.png'
import dinnerImg from '@/assets/imgs/dinner.png'
import healthyFoodImg from '@/assets/imgs/healthy-food.png'
import snacksImg from '@/assets/imgs/snacks.png'
import dessertImg from '@/assets/imgs/dessert.png'

const MenuTiles: FC = () => {
	return (
		<div className='menu-tiles'>
			<div className='menu-tiles__box'>
				<Link
					href='#'
					className='menu-tiles__item'
					style={{
						backgroundImage: `url(${breakfastImg.src})`,
					}}>
					<p className='menu-tiles__title title-text'>Завтрак</p>
				</Link>
				<Link
					href='#'
					className='menu-tiles__item'
					style={{
						backgroundImage: `url(${lunchImg.src})`,
					}}>
					<p className='menu-tiles__title title-text'>Обед</p>
				</Link>
				<Link
					href='#'
					className='menu-tiles__item'
					style={{
						backgroundImage: `url(${dinnerImg.src})`,
					}}>
					<p className='menu-tiles__title title-text'>Ужин</p>
				</Link>
				<Link
					href='#'
					className='menu-tiles__item'
					style={{
						backgroundImage: `url(${healthyFoodImg.src})`,
					}}>
					<p className='menu-tiles__title title-text'>Здоровая еда</p>
				</Link>
				<Link
					href='#'
					className='menu-tiles__item'
					style={{
						backgroundImage: `url(${snacksImg.src})`,
					}}>
					<p className='menu-tiles__title title-text'>Закуски</p>
				</Link>
				<Link
					href='#'
					className='menu-tiles__item'
					style={{
						backgroundImage: `url(${dessertImg.src})`,
					}}>
					<p className='menu-tiles__title title-text'>Десерты</p>
				</Link>
			</div>
			<Link href='/recipes'>
				<UsualButton className='menu-tiles__button'>
					Посмотреть все рецепты
				</UsualButton>
			</Link>
		</div>
	)
}

export default MenuTiles
