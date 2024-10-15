'use client'

import './upScroll.scss'

import { FC } from 'react'

import Image from 'next/image'

import GlobalButton from '@/UI/buttons/globalButton/globalButton'

import upArrowImg from '@/assets/icons/up-arrow.png'

const UpScroll: FC = () => {
	const scrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<GlobalButton onClick={scrollUp} className='up-scroll'>
			<Image src={upArrowImg} alt='up' />
		</GlobalButton>
	)
}

export default UpScroll
