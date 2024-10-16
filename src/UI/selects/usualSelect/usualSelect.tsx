import classes from './usualSelect.module.scss'

import { FC } from 'react'

interface IUsualSelect {
	options: { value: string; label: string }[]
	className?: string
}

const UsualSelect: FC<IUsualSelect> = ({ options, ...props }) => {
	return (
		<>
			<select
				{...props}
				className={`${classes.usualSelect} ${props.className} link-text`}>
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
