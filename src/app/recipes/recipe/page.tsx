import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import RecipesDetailed from '@/components/recipes/recipesDetailed/recipesDetailed'

const RecipePage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<RecipesDetailed />
				</div>
			</MainContainer>
		</>
	)
}

export default RecipePage
