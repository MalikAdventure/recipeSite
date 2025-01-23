import classes from './hintButton.module.scss'

import { FC, ReactNode } from 'react'

interface IHintButton {
	children: ReactNode
	className?: string
}

const HintButton: FC<IHintButton> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`${classes.hintButton} ${props.className} description-text`}>
			{children}
		</button>
	)
}

export default HintButton
