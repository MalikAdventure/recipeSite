import './usualSearch.scss'

import { FC } from 'react'

import UsualInput from '@/UI/inputs/usualInput/usualInput'
import AttractiveButton from '@/UI/buttons/attractiveButton/attractiveButton'

interface IUsualSearch {
	placeholder: string
}

const UsualSearch: FC<IUsualSearch> = ({ placeholder }) => {
	return (
		<div>
			<UsualInput placeholder={placeholder} className='usual-search__input' />
			<AttractiveButton>Найти</AttractiveButton>
		</div>
	)
}

export default UsualSearch
