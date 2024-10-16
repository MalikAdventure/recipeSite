'use client'

import './recipeFilter.scss'

import { FC } from 'react'

import UsualSelect from '@/UI/selects/usualSelect/usualSelect'
import UsualButton from '@/UI/buttons/usualButton/usualButton'
// import CenterModal from '@/UI/modals/centerModal/centerModal'

const RecipeFilter: FC = () => {
	const options = [
		{ value: '', label: 'Сортировка' },
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	]

	return (
		<div className='recipe-filter__box'>
			<UsualSelect options={options} className='recipe-filter__item' />
			<UsualButton
				onClick={() => console.log('filter')}
				className='recipe-filter__item'>
				Фильтры
			</UsualButton>
		</div>
	)
}

export default RecipeFilter
