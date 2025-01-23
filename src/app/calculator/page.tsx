import { FC } from 'react'

import MainContainer from '@/container/mainContainer/mainContainer'
import CalorieCalculator from '@/components/calorieCalculator/calorieCalculator'

const CalculatorPage: FC = () => {
	return (
		<>
			<MainContainer>
				<div className='section'>
					<CalorieCalculator />
				</div>
			</MainContainer>
		</>
	)
}

export default CalculatorPage
