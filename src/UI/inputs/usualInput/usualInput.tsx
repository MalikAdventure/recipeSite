import classes from './usualInput.module.scss'

import { FC, forwardRef } from 'react'

interface IUsualInput {
	className?: string
	placeholder?: string
	type?: 'text' | 'password' | 'email'
}

const UsualInput: FC<IUsualInput> = forwardRef((props, ref) => {
	return (
		<input
			{...props}
			type={props.type}
			placeholder={props.placeholder}
			className={`${classes.usualInput} ${props.className} description-text`}
			ref={ref}
		/>
	)
})

UsualInput.displayName = 'UsualInput'

export default UsualInput
