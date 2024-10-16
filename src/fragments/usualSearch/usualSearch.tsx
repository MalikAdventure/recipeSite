import './usualSearch.scss'

import { FC } from 'react'

import UsualInput from '@/UI/inputs/usualInput/usualInput'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

interface IUsualSearch {
	placeholder: string
	className?: string
}

const UsualSearch: FC<IUsualSearch> = ({ placeholder, ...props }) => {
	return (
		<div>
			<UsualInput
				{...props}
				placeholder={placeholder}
				className={`${props.className} usual-search__input`}
			/>
			<AttractiveButton {...props}>Найти</AttractiveButton>
		</div>
	)
}

export default UsualSearch
