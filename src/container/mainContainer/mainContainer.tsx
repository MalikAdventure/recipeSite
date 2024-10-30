'use client'

import './mainContainer.scss'

import { FC, ReactNode } from 'react'

import Header from '@/components/header/header'
import Navigation from '@/components/navigation/navigation'
import UpScroll from '@/components/upScroll/upScroll'
import Footer from '@/components/footer/footer'

interface IMainContainer {
	children: ReactNode
}

const MainContainer: FC<IMainContainer> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='main-container__wrapper container'>
				<div className='main-container__wrapper-left'>
					<Navigation />
				</div>
				<main className='main-container__wrapper-right'>{children}</main>
			</div>
			<UpScroll />
			<Footer />
		</>
	)
}

export default MainContainer
