import './page.scss'

import MainContainer from '@/container/mainContainer'
import SeasonalRecipe from '@/components/seasonalRecipe/seasonalRecipe'

const Home = () => {
	return (
		<>
			<MainContainer>
				<div className='seasonal-recipe'>
					<SeasonalRecipe />
				</div>
			</MainContainer>
		</>
	)
}

export default Home
