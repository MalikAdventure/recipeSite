'use client'

import './recipeFilter.scss'

import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'
import { setFilter, deleteFilter } from '@/store/reducers/recipesSlice'

import UsualSelect from '@/UI/selects/usualSelect/usualSelect'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import CenterModal from '@/UI/modals/centerModal/centerModal'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

const RecipeFilter: FC = () => {
	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)

	const options = [
		{ value: '', label: 'По умолчанию' },
		{ value: 'new', label: 'Новые рецепты' },
		{ value: 'old', label: 'Старые рецепты' },
	]

	return (
		<>
			<div className='recipe-filter__box'>
				<UsualSelect options={options} className='recipe-filter__item' />
				<UsualButton
					onClick={() => dispatch(setShowModal(true))}
					className='recipe-filter__item'>
					Фильтры
				</UsualButton>
			</div>
			{showModal && (
				<CenterModal>
					<div>
						<h2 className='recipe-filter__topic topic-text'>Фильтры</h2>
						<div className='recipe-filter__filter'>
							<h3 className='recipe-filter__title title-text'>
								Время готовки блюда
							</h3>
							<div className='recipe-filter__buttons'>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'cooking_time_lte', value: '15' })
										)
									}>
									До 15 минут
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'cooking_time_lte', value: '30' })
										)
									}>
									До 30 минут
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'cooking_time_lte', value: '45' })
										)
									}>
									До 45 минут
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'cooking_time_lte', value: '60' })
										)
									}>
									До часа
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'cooking_time_lte', value: '1000' })
										)
									}>
									Более часа
								</UsualButton>
							</div>
						</div>
						<div className='recipe-filter__filter'>
							<h3 className='recipe-filter__title title-text'>
								Количество калорий на 100 грамм блюда
							</h3>
							<div className='recipe-filter__buttons'>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'calories_per_100_grams_lte',
												value: '200',
											})
										)
									}>
									До 200 калорий
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'calories_per_100_grams_lte',
												value: '400',
											})
										)
									}>
									До 400 калорий
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'calories_per_100_grams_lte',
												value: '600',
											})
										)
									}>
									До 600 калорий
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'calories_per_100_grams_lte',
												value: '800',
											})
										)
									}>
									До 800 калорий
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'calories_per_100_grams_lte',
												value: '1000',
											})
										)
									}>
									До 1000 калорий
								</UsualButton>
							</div>
						</div>
						<div className='recipe-filter__filter'>
							<h3 className='recipe-filter__title title-text'>
								Тип приема пищи
							</h3>
							<div className='recipe-filter__buttons'>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_meal', value: 'Завтрак' })
										)
									}>
									Завтрак
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(setFilter({ name: 'type_of_meal', value: 'Обед' }))
									}>
									Обед
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_meal', value: 'Полдник' })
										)
									}>
									Полдник
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(setFilter({ name: 'type_of_meal', value: 'Ужин' }))
									}>
									Ужин
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_meal', value: 'Перекус' })
										)
									}>
									Перекус
								</UsualButton>
							</div>
						</div>
						<div className='recipe-filter__filter'>
							<h3 className='recipe-filter__title title-text'>Тип блюда</h3>
							<div className='recipe-filter__buttons'>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Первые блюда' })
										)
									}>
									Первые блюда
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Вторые блюда' })
										)
									}>
									Вторые блюда
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Закуски' })
										)
									}>
									Закуски
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'type_of_dish',
												value: 'Соусы и маринады',
											})
										)
									}>
									Соусы и маринады
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Заготовки' })
										)
									}>
									Заготовки
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Напитки' })
										)
									}>
									Напитки
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Десерты' })
										)
									}>
									Десерты
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Гарниры' })
										)
									}>
									Гарниры
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({ name: 'type_of_dish', value: 'Здоровая еда' })
										)
									}>
									Здоровая еда
								</UsualButton>
							</div>
						</div>
						<div className='recipe-filter__filter'>
							<h3 className='recipe-filter__title title-text'>Кухня мира</h3>
							<div className='recipe-filter__buttons'>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Азиатская кухня',
											})
										)
									}>
									Азиатская кухня
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Европейская кухня',
											})
										)
									}>
									Европейская кухня
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Французская кухня',
											})
										)
									}>
									Французская кухня
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Американская кухня',
											})
										)
									}>
									Американская кухня
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Индонезийская кухня',
											})
										)
									}>
									Индонезийская кухня
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Мексиканская кухня',
											})
										)
									}>
									Мексиканская кухня
								</UsualButton>
								<UsualButton
									onClick={() =>
										dispatch(
											setFilter({
												name: 'world_cuisine',
												value: 'Индийская кухня',
											})
										)
									}>
									Индийская кухня
								</UsualButton>
							</div>
						</div>
						<AttractiveButton
							onClick={() => {
								dispatch(setShowModal(false))
								dispatch(deleteFilter())
							}}>
							Сбросить фильтры
						</AttractiveButton>
					</div>
				</CenterModal>
			)}
		</>
	)
}

export default RecipeFilter
