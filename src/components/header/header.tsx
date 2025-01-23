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
	const [recipeTime, setRecipeTime] = useState('')
	const [recipeCalories, setRecipeCalories] = useState('')
	const [recipeMeal, setRecipeMeal] = useState('')
	const [recipeDish, setRecipeDish] = useState('')
	const [recipeCuisine, setRecipeCuisine] = useState('')
	const [recipeDescription, setRecipeDescription] = useState('')

	const [createRecipe, {}] = api.useCreateRecipeMutation()
	const createRecipeHandler = async (
		recipeTitle: string,
		recipeDescription: string
	) => {
		if (recipeTitle !== '' && recipeDescription !== '') {
			const date = new Date().toISOString()
			await createRecipe({
				title: recipeTitle,
				body: recipeDescription,
				cooking_time: recipeTime,
				calories_per_100_grams: recipeCalories,
				type_of_meal: recipeMeal,
				type_of_dish: recipeDish,
				world_cuisine: recipeCuisine,
				data_created: date,
				data_updated: date,
			})
			dispatch(setShowModal(false))
			setRecipeTitle('')
			setRecipeTime('')
			setRecipeCalories('')
			setRecipeMeal('')
			setRecipeDish('')
			setRecipeCuisine('')
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
						<UsualButton className='header__button header__button_before'>
							{/* Создать рецепт */}
							<Image src={plusImg} alt='plus' priority />
						</UsualButton>
					</Link>
				) : (
					<UsualButton
						onClick={() =>
							dispatch(setShowModal(true), setShowRecipeModal(true))
						}
						className='header__button header__button_before'>
						{/* Создать рецепт */}
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
							<UsualInput
								placeholder='Напишите время готовки'
								value={recipeTime}
								onChange={(e) => setRecipeTime(e.target.value)}
							/>
							<UsualInput
								placeholder='Напишите количество калорий на 100 грамм'
								value={recipeCalories}
								onChange={(e) => setRecipeCalories(e.target.value)}
							/>
							<UsualInput
								placeholder='Напишите тип еды'
								value={recipeMeal}
								onChange={(e) => setRecipeMeal(e.target.value)}
							/>
							<UsualInput
								placeholder='Напишите тип блюда'
								value={recipeDish}
								onChange={(e) => setRecipeDish(e.target.value)}
							/>
							<UsualInput
								placeholder='Напишите кухню'
								value={recipeCuisine}
								onChange={(e) => setRecipeCuisine(e.target.value)}
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
