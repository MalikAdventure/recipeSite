import classes from './globalInput.module.scss'

import { FC, ChangeEvent } from 'react'

interface IGlobalInput {
	className?: string
	placeholder?: string
	defaultValue?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onClick?: () => void
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
