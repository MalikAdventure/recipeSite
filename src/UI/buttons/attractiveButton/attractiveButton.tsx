import classes from './attractiveButton.module.scss'

import { FC, ReactNode } from 'react'

interface IAttractiveButton {
	children: ReactNode
	className?: string
}

const AttractiveButton: FC<IAttractiveButton> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.attractiveButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default AttractiveButton
