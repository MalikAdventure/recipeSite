'use client'

import { FC, ReactNode } from 'react'

import { Provider } from 'react-redux'
import { setupStore } from '@/store/store'

interface IApp {
	children: ReactNode
}

const App: FC<IApp> = ({ children }) => {
	const store = setupStore()

	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	)
}

export default App
