import './upScroll.scss'

import { FC } from 'react'

import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setShowButton } from '../../store/reducers/upSlice'

import { useEffect } from 'react'

import GlobalButton from '@/UI/buttons/globalButton/globalButton'

import upArrowImg from '@/assets/icons/up-arrow.png'

const UpScroll: FC = () => {
	const dispatch = useAppDispatch()
	const { showButton } = useAppSelector((state) => state.upReducer)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 800) {
				dispatch(setShowButton(true))
			} else {
				dispatch(setShowButton(false))
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<>
			{showButton && (
				<GlobalButton onClick={scrollUp} className='up-scroll'>
					<Image src={upArrowImg} alt='up' />
				</GlobalButton>
			)}
		</>
	)
}

export default UpScroll
