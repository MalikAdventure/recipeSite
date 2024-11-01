'use client'

import './page.scss'

import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import SeasonalRecipe from '@/components/seasonalRecipe/seasonalRecipe'
import MenuTiles from '@/components/menuTiles/menuTiles'
import NewsList from '@/components/news/newsList/newsList'

import { useAppDispatch } from '@/hooks/redux'
import { setContextPage } from '@/store/reducers/contextSlice'

import { useEffect } from 'react'

const HomePage: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setContextPage('main'))
	})

	return (
		<>
			<MainContainer>
				<div className='section'>
					<SeasonalRecipe />
				</div>
				<div className='section'>
					<MenuTiles />
				</div>
				<div className='section'>
					<NewsList />
				</div>
			</MainContainer>
		</>
	)
}

export default HomePage
