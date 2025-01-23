import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import RecipesList from '@/components/recipes/recipesList/recipesList'

const RecipesPage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<RecipesList />
				</div>
			</MainContainer>
		</>
	)
}

export default RecipesPage
