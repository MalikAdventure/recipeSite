'use client'

import './page.scss'

import MainContainer from '@/container/mainContainer/mainContainer'
import SeasonalRecipe from '@/components/seasonalRecipe/seasonalRecipe'
import MenuTiles from '@/components/menuTiles/menuTiles'
import NewsList from '@/components/news/newsList/newsList'

const Home = () => {
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

export default Home
