import classes from './usualButton.module.scss'

import { FC, ReactNode } from 'react'

interface IUsualButton {
	children: ReactNode
	className?: string
	onClick?: () => void
}

const UsualButton: FC<IUsualButton> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.usualButton} ${props.className} link-text`}>
			{children}
		</button>
	)
}

export default UsualButton
