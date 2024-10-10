import classes from './globalButton.module.scss'

import { FC, ReactNode } from 'react'

interface IGlobalButton {
	children: ReactNode
	className?: string
}

const GlobalButton: FC<IGlobalButton> = ({ children, ...props }) => {
	return (
		<button className={`${classes.globalButton} ${props.className} link-text`}>
			{children}
		</button>
	)
}

export default GlobalButton
