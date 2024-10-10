import './globalSearch.scss'

import { FC } from 'react'

import Image from 'next/image'

import GlobalInput from '@/UI/inputs/globalInput/globalInput'
import GlobalButton from '@/UI/buttons/globalButton/globalButton'

import searchImg from '@/assets/icons/search.png'

const GlobalSearch: FC = () => {
	return (
		<div className='global-search'>
			<GlobalInput placeholder='Поиск' />
			<GlobalButton>
				<Image src={searchImg} alt='search' />
			</GlobalButton>
		</div>
	)
}

export default GlobalSearch
