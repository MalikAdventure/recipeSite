import './header.scss'

import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/assets/icons/logo.png'
import plusImg from '@/assets/icons/plus.png'
import exitImg from '@/assets/icons/exit.png'

import UsualButton from '@/UI/buttons/usualButton/usualButton'
import GlobalSearch from '@/fragments/globalSearch/globalSearch'
import CenterModal from '@/UI/modals/centerModal/centerModal'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

const Header: FC = () => {
	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)

	const auth = sessionStorage.getItem('profile')

	return (
		<header className='header'>
			<div className='header__container container'>
				<Link href='/' className='header__logo'>
					<Image src={logoImg} alt='logo' priority />
				</Link>
				{!auth ? (
					<Link href='/authorization' className='header__button-link'>
						<UsualButton className='header__button'>
							Создать рецепт
							<Image src={plusImg} alt='plus' priority />
						</UsualButton>
					</Link>
				) : (
					<UsualButton
						onClick={() => dispatch(setShowModal(true))}
						className='header__button'>
						Создать рецепт
						<Image src={plusImg} alt='plus' priority />
					</UsualButton>
				)}
				{showModal && (
					<CenterModal>
						<div>sfafafa</div>
					</CenterModal>
				)}
				<GlobalSearch />
				{!auth ? (
					<Link href='/authorization' className='header__button-link'>
						<UsualButton className='header__button'>
							Войти
							<Image src={exitImg} alt='exit' priority />
						</UsualButton>
					</Link>
				) : (
					<Link href='/profile' className='header__button-link'>
						<UsualButton className='header__button'>
							Личный кабинет
							<Image src={exitImg} alt='exit' priority />
						</UsualButton>
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
