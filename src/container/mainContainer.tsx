import { FC, ReactNode } from 'react'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

interface IMainContainer {
	children: ReactNode
}

const MainContainer: FC<IMainContainer> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default MainContainer
