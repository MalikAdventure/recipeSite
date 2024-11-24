import classes from './usualSelect.module.scss'

import { FC, ChangeEvent } from 'react'

import { setOption } from '@/store/reducers/recipesSlice'
import { useAppDispatch } from '@/hooks/redux'

interface IUsualSelect {
	options: { value: string; label: string }[]
	className?: string
}

const UsualSelect: FC<IUsualSelect> = ({ options, ...props }) => {
	const dispatch = useAppDispatch()

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		dispatch(setOption(event.target.value))
	}

	return (
		<>
			<select
				{...props}
				className={`${classes.usualSelect} ${props.className} link-text`}
				onChange={handleChange}>
				{options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	)
}

export default UsualSelect
