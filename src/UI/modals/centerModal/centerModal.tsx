import classes from './centerModal.module.scss'

import { FC, ReactNode } from 'react'

interface ICenterModal {
	children: ReactNode
	className?: string
}

const CenterModal: FC<ICenterModal> = ({ children, ...props }) => {
	return (
		<div {...props} className={`${classes.centerModal} ${props.className}`}>
			<div className={classes.centerModalContent}>{children}</div>
		</div>
	)
}

export default CenterModal
