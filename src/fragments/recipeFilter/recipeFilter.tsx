'use client'

import './recipeFilter.scss'

import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

import UsualSelect from '@/UI/selects/usualSelect/usualSelect'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
import CenterModal from '@/UI/modals/centerModal/centerModal'

const RecipeFilter: FC = () => {
	const dispatch = useAppDispatch()
	const { showModal } = useAppSelector((state) => state.modalReducer)

	const options = [
		{ value: '', label: 'Сортировка' },
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
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
						<h2>Фильтры</h2>
						<p>Параметр 1</p>
						<p>Параметр 2</p>
						<p>Параметр 3</p>
						<p>Параметр 4</p>
						<p>Параметр 5</p>
					</div>
				</CenterModal>
			)}
		</>
	)
}

export default RecipeFilter
