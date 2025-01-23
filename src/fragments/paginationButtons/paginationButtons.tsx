import './paginationButtons.scss'

import { FC } from 'react'

import UsualButton from '@/UI/buttons/usualButton/usualButton'

import { getPageArray } from '@/utils/pagePagination/pagePagination'

interface IPaginationButtons {
	totalPages: number
	page: number
	changePage: (page: number) => void
}

const PaginationButtons: FC<IPaginationButtons> = ({
	totalPages,
	page,
	changePage,
	...props
}) => {
	const pagesArray = getPageArray(totalPages)

	return (
		<div {...props} className='pagination-buttons'>
			{pagesArray.map((i) => (
				<UsualButton
					key={i}
					onClick={() => changePage(i)}
					className={
						page === i
							? 'pagination-buttons__button pagination-buttons__button_active'
							: 'pagination-buttons__button'
					}>
					{i}
				</UsualButton>
			))}
		</div>
	)
}

export default PaginationButtons
