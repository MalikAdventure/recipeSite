import './usualSearch.scss'

import { FC } from 'react'

import UsualInput from '@/UI/inputs/usualInput/usualInput'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

import { useAppDispatch } from '@/hooks/redux'

import { useState } from 'react'
import { setSearch } from '@/store/reducers/recipesSlice'

interface IUsualSearch {
	placeholder: string
	className?: string
}

const UsualSearch: FC<IUsualSearch> = ({ placeholder, ...props }) => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('')

	return (
		<div>
			<UsualInput
				{...props}
				placeholder={placeholder}
				className={`${props.className} usual-search__input`}
				onChange={(e) => setValue(e.target.value)}
			/>
			<AttractiveButton onClick={() => dispatch(setSearch(value))} {...props}>
				Найти
			</AttractiveButton>
		</div>
	)
}

export default UsualSearch
