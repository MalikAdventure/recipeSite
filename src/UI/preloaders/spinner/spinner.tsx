import classes from './spinner.module.scss'

import { FC } from 'react'

interface ISpinner {
	className?: string
}

const Spinner: FC<ISpinner> = ({ ...props }) => {
	return (
		<>
			<span
				{...props}
				className={`${classes.spinner} ${props.className}`}></span>
		</>
	)
}

export default Spinner
