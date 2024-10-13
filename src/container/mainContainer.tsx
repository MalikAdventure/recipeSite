import './mainContainer.scss'

import { FC, ReactNode } from 'react'

import Header from '@/components/header/header'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/footer/footer'

interface IMainContainer {
	children: ReactNode
}

const MainContainer: FC<IMainContainer> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='main-container__wrapper container section'>
				<div className='main-container__wrapper-left'>
					<Navigation />
				</div>
				<main className='main-container__wrapper-right'>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default MainContainer
