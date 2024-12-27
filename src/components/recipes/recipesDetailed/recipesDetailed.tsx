'use client'

import './recipesDetailed.scss'

import { FC } from 'react'
import { IRecipe } from '@/types/IRecipe'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

import Spinner from '@/UI/preloaders/spinner/spinner'
import CenterModal from '@/UI/modals/centerModal/centerModal'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import UsualInput from '@/UI/inputs/usualInput/usualInput'
import UsualTextarea from '@/UI/inputs/usualTextarea/usualTextarea'

import noneImg from '@/assets/imgs/none.png'

import { useState, useEffect } from 'react'

import { api } from '@/services/recipeServices'

const RecipesDetailed: FC = () => {
	const params = useParams()

	const { data, isLoading, isFetching, error } = api.useGetRecipeByIdQuery(
		params.id
	)

	const { back } = useRouter()

	const auth = sessionStorage.getItem('profile')

	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)
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

	const dataCreated = data?.[0]?.data_created
	const [updateRecipe, {}] = api.useUpdateRecipeMutation()
	const updateRecipeHandler = async (
		recipeTitle: string,
		recipeDescription: string
	) => {
		if (recipeTitle !== '' && recipeDescription !== '') {
			const date = new Date().toISOString()
			await updateRecipe({
				id: params.id,
				title: recipeTitle,
				body: recipeDescription,
				cooking_time: recipeTime,
				calories_per_100_grams: recipeCalories,
				type_of_meal: recipeMeal,
				type_of_dish: recipeDish,
				world_cuisine: recipeCuisine,
				data_created: dataCreated,
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

	const [deleteRecipe, {}] = api.useDeleteRecipeMutation()
	const deleteRecipeHandler = async () => {
		await deleteRecipe(params.id)
	}

	return (
		<>
			<div className='recipes-detailed'>
				{data &&
					data.map((recipe: IRecipe) => (
						<div key={recipe.id} className='recipes-detailed__box'>
							<h1 className='title-text'>
								{recipe.id} {recipe.title}
							</h1>
							<Image src={noneImg} alt='recipe' priority />
							<p className='description-text'>{recipe.body}</p>
							<p className='description-text'>
								Время на готовку: {recipe.cooking_time}
							</p>
							<p className='description-text'>
								Количество калории на 100 грамм блюда:{' '}
								{recipe.calories_per_100_grams}
							</p>
							<p className='description-text'>Тип еды: {recipe.type_of_meal}</p>
							<p className='description-text'>
								Тип блюда: {recipe.type_of_dish}
							</p>
							<p className='description-text'>Кухня: {recipe.world_cuisine}</p>
							<p className='description-text'>
								{new Date(recipe.data_updated).toLocaleString('ru-RU', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									second: 'numeric',
								})}
							</p>
						</div>
					))}
				{isLoading && <Spinner />}
				{isFetching && !isLoading && <Spinner />}
				{error && <h2 className='error-text'>Ошибка при загрузки данных</h2>}
				{!data && !isLoading && !isFetching && !error && (
					<h2>Рецепт не найден</h2>
				)}
				{data?.length === 0 && !isLoading && !isFetching && !error && (
					<>
						<h2 className='recipes-detailed__title title-text'>
							Рецепт не найден
						</h2>
						<div className='recipes-detailed__buttons'>
							<Link href='/' className='recipes-detailed__button'>
								<AttractiveButton>Перейти на главную</AttractiveButton>
							</Link>
							<AttractiveButton
								className='recipes-detailed__button'
								onClick={back}>
								Вернутся назад
							</AttractiveButton>
						</div>
					</>
				)}
				{auth?.includes('admin') && data?.length !== 0 && (
					<div className='recipes-detailed__buttons'>
						<AttractiveButton onClick={deleteRecipeHandler}>
							Удалить рецепт
						</AttractiveButton>
						<AttractiveButton
							onClick={() =>
								dispatch(setShowModal(true), setShowRecipeModal(true))
							}>
							Редактировать рецепт
						</AttractiveButton>
					</div>
				)}
				{showModal && showRecipeModal && (
					<CenterModal>
						<div className='modal'>
							<h2 className='title-text'>Написать рецепт</h2>
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
									updateRecipeHandler(recipeTitle, recipeDescription)
								}
								className='modal__button'>
								Редактировать рецепт
							</UsualButton>
						</div>
					</CenterModal>
				)}
			</div>
		</>
	)
}

export default RecipesDetailed
