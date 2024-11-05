import classes from './centerModal.module.scss'

import { FC, ReactNode } from 'react'

import { useAppDispatch } from '@/hooks/redux'
import { setShowModal } from '@/store/reducers/modalSlice'

interface ICenterModal {
	children: ReactNode
	className?: string
}

const CenterModal: FC<ICenterModal> = ({ children, ...props }) => {
	const dispatch = useAppDispatch()

	return (
		<div
			{...props}
			onClick={() => dispatch(setShowModal(false))}
			className={`${classes.centerModal} ${classes.centerModal_active}`}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${classes.centerModalContent} ${props.className}`}>
				{children}
			</div>
		</div>
	)
}

export default CenterModal
