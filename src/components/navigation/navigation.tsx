import './navigation.scss'

import { FC } from 'react'

import Link from 'next/link'

const Navigation: FC = () => {
	return (
		<nav className='navigation section'>
			<ul className='navigation__list'>
				<li className='navigation__item link-text'>
					<Link href='/'>Главная страница</Link>
				</li>
				<li className='navigation__item link-text'>
					<Link href='/recipes'>Рецепты</Link>
				</li>
				<li className='navigation__item link-text'>
					<Link href='/list-of-news'>Новости</Link>
				</li>
				<li className='navigation__item link-text'>
					<Link href='/calculator'>Калькулятор калорий</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
