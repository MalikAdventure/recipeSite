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
import UsualInput from '@/UI/inputs/usualInput/usualInput'
import UsualTextarea from '@/UI/inputs/usualTextarea/usualTextarea'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

import { useState, useEffect } from 'react'

import { api } from '@/services/recipeServices'

const Header: FC = () => {
	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)

	const auth = sessionStorage.getItem('profile')

	const [showRecipeModal, setShowRecipeModal] = useState(false)

	useEffect(() => {
		if (!showModal) {
			setShowRecipeModal(false)
		}
	}, [showModal])

	const [recipeTitle, setRecipeTitle] = useState('')
	const [recipeDescription, setRecipeDescription] = useState('')

	const [createRecipe, {}] = api.useCreateRecipeMutation()

	const createRecipeHandler = async (
		recipeTitle: string,
		recipeDescription: string
	) => {
		if (recipeTitle !== '' && recipeDescription !== '') {
			await createRecipe({
				title: recipeTitle,
				body: recipeDescription,
			})
			dispatch(setShowModal(false))
			setRecipeTitle('')
			setRecipeDescription('')
		}
	}

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
						onClick={() =>
							dispatch(setShowModal(true), setShowRecipeModal(true))
						}
						className='header__button'>
						Создать рецепт
						<Image src={plusImg} alt='plus' priority />
					</UsualButton>
				)}
				{showModal && showRecipeModal && (
					<CenterModal>
						<div className='modal'>
							<h2 className='title-text'>Создание рецепта</h2>
							<UsualInput
								placeholder='Напишите название рецепта'
								value={recipeTitle}
								onChange={(e) => setRecipeTitle(e.target.value)}
							/>
							<UsualTextarea
								placeholder='Напишите описание рецепта'
								value={recipeDescription}
								onChange={(e) =>
									setRecipeDescription(e.target.value)
								}></UsualTextarea>
							<UsualButton
								onClick={() =>
									createRecipeHandler(recipeTitle, recipeDescription)
								}
								className='modal__button'>
								Создать рецепт
							</UsualButton>
						</div>
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
