import classes from './usualTextarea.module.scss'

import { FC, ReactNode } from 'react'

interface IUsualTextarea {
	placeholder: string
	className?: string
	children?: ReactNode
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const UsualTextarea: FC<IUsualTextarea> = ({
	placeholder,
	children,
	...props
}) => {
	return (
		<>
			<textarea
				className={`${props.className} ${classes.usualTextarea} description-text`}
				placeholder={placeholder}
				{...props}>
				{children}
			</textarea>
		</>
	)
}

export default UsualTextarea
