import classes from './usualInput.module.scss'

import { FC } from 'react'

interface IUsualInput {
	className?: string
	placeholder?: string
}

const UsualInput: FC<IUsualInput> = ({ placeholder, ...props }) => {
	return (
		<input
			{...props}
			type='text'
			placeholder={placeholder}
			className={`${classes.usualInput} ${props.className} description-text`}
		/>
	)
}

export default UsualInput
