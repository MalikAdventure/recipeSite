import classes from './globalInput.module.scss'

import { FC } from 'react'

interface IGlobalInput {
	className?: string
	placeholder?: string
}

const GlobalInput: FC<IGlobalInput> = ({ placeholder, ...props }) => {
	return (
		<input
			{...props}
			type='text'
			placeholder={placeholder}
			className={`${classes.globalInput} ${props.className} description-text`}
		/>
	)
}

export default GlobalInput
