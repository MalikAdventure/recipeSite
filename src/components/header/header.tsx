import './header.scss'

import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/icons/logo.png'
import plusImg from '@/assets/icons/plus.png'
import exitImg from '@/assets/icons/exit.png'

import UsualButton from '@/UI/buttons/usualButton/usualButton'
import GlobalSearch from '@/fragments/globalSearch/globalSearch'

const Header: FC = () => {
	return (
		<header className='header'>
			<div className='header__container container'>
				<Link href='/' className='header__logo'>
					<Image src={logoImg} alt='logo' priority />
				</Link>
				<UsualButton className='header__button'>
					Создать рецепт
					<Image src={plusImg} alt='plus' priority />
				</UsualButton>
				<GlobalSearch />
				<Link href='/authorization' className='header__button-link'>
					<UsualButton className='header__button'>
						Войти
						<Image src={exitImg} alt='exit' priority />
					</UsualButton>
				</Link>
			</div>
		</header>
	)
}

export default Header
