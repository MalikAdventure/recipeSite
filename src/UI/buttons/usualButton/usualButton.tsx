import classes from './usualButton.module.scss'

import { FC, ReactNode } from 'react'

interface IUsualButton {
	children: ReactNode
	className?: string
	type?: 'button' | 'submit'
	onClick?: () => void
}

const UsualButton: FC<IUsualButton> = ({ children, type, ...props }) => {
	return (
		<button
			{...props}
			type={type}
			className={`${classes.usualButton} ${props.className} link-text`}>
			{children}
		</button>
	)
}

export default UsualButton
